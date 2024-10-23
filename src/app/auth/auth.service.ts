import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AuthUtils } from './auth-utils';


@Injectable()
export class AuthService {
    private baseUrl: string;
    private _authenticated: boolean = false;
    //private apiUrl = "http://localhost:5110/api/Login";
    //dummy
    user: any;
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        // private _userService: UserService
    ) {
        this.baseUrl = environment.apiUrl;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    set accessUser(user: any) {
        localStorage.setItem('user', user);
    }

    get accessUser(): any {
        return localStorage.getItem('user') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(data: any): Observable<string> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('User is already logged in.');
        }
        return this._httpClient.post<any>(this.baseUrl + 'Login/UserLogin', data).pipe(
            switchMap((response: any) => {
                this.accessToken = response.token;
                this._authenticated = true;
                return of(this.accessToken);
            }));
    }

    getRoleId() {
        debugger
        const decodedToken = AuthUtils._decodeToken(localStorage.getItem('accessToken'));
        const roleId = decodedToken.roleId;
        return roleId;
    }

    getUserId() {
        debugger;
        const decodedToken = AuthUtils._decodeToken(localStorage.getItem('accessToken'));
        const userId = decodedToken.id;
        return userId;
    }


    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Renew token
        return this._httpClient.post('api/auth/refresh-access-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                //this.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        localStorage.removeItem('accessToken');
        this._authenticated = false;
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        if (this._authenticated) {
            return of(true);
        }
        if (!this.accessToken) {
            this.signOut();
            return of(false);
        }
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            this.signOut();
            return of(false);
        }

        return of(true);
    }
}
