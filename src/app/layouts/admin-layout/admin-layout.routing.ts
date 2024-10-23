import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UpcomingExamComponent } from 'app/pages/upcoming-exam/upcoming-exam.component';
import { CurrentExamComponent } from 'app/pages/current-exam/current-exam.component';
import { PastExamComponent } from 'app/pages/past-exam/past-exam.component';
import { LoginHistoryComponent } from 'app/pages/login-history/login-history.component';
import { UserProfileComponent } from 'app/auth/user-profile/user-profile.component';
import { ChangePasswordComponent } from 'app/auth/change-password/change-password.component';
// import { LoginComponent } from 'app/auth/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'upcoming-exam',  component: UpcomingExamComponent},
    { path: 'current-exam',   component: CurrentExamComponent},
    { path: 'past-exam',      component: PastExamComponent},
    { path: 'login-history',  component:LoginHistoryComponent},
    // { path: 'login',          component: LoginComponent },
    { path: 'user-profile',   component:UserProfileComponent},
    { path: 'change-password',component:ChangePasswordComponent}

];
