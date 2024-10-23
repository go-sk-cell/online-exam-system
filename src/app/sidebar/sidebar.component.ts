import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard', icon:'fa-solid fa-gauge-high',       class: '' },
    { path: '/upcoming-exam', title: 'Upcoming Exams', icon:'fa-solid fa-meteor',    class: '' },
    { path: '/current-exam',  title: 'Current Exams', icon:'fa-solid fa-circle-play',    class: '' },
    { path: '/past-exam',     title: 'Past Exams',  icon:'fa-solid fa-circle-stop',      class: '' },
    { path: '/login-history', title: 'Login History', icon:'fa-solid fa-clock-rotate-left',      class: ''},
    // <i class="fa-regular fa-circle-pause"></i>
    // { path: '/dashboard',     title: 'Dashboard', icon:'nc-tv-2',       class: '' },
    // { path: '/upcoming-exam', title: 'Upcoming Exams', icon:'nc-spaceship',    class: '' },
    // { path: '/current-exam',  title: 'Current Exams', icon:'nc-button-play',    class: '' },
    // { path: '/past-exam',     title: 'Past Exams',  icon:'nc-button-power',      class: '' },
    // { path: '/login-history', title: 'Login History', icon:'nc-bullet-list-67',      class: ''},
    // { path: '/notifications', title: 'Past Exams', icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'Login History',icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',  icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography', icon:'nc-caps-small', class: '' },
    // { path: '/login',         title: 'Login',    icon:'nc-spaceship',  class: 'active-pro' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
