// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewComplaintComponent } from './pages/new-complaint/new-complaint.component';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { DepartmentComponent } from './pages/department/department.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'; // Import Admin Dashboard

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'new-complaint',
        component: NewComplaintComponent,
      },
      {
        path: 'complaint-list',
        component: ComplaintListComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
    ],
  },
  {
    path: 'admin-dashboard', // Define the route for Admin Dashboard
    component: AdminDashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
