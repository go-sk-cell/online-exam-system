import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NoAuthGuard } from './auth/guards/noauth.guard';
import { AuthGuard } from './auth/guards/auth.guard';

export const AppRoutes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'dashboard/dashboard' },
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboard/dashboard' },
  // Auth routes for guests
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: AdminLayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      { path: 'sign-in', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  // Admin routes
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: AdminLayoutComponent,
    children: [
    {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
    },
]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
