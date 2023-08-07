import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './admin-dash.component';
import { AlumniUvComponent } from './components/alumni-uv/alumni-uv.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { EmployerApplicationsComponent } from './components/employer-applications/employer-applications.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import { JobpostformComponent } from './components/jobpostform/jobpostform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerifyEmpComponent } from './components/verify-emp/verify-emp.component';



@NgModule({
  declarations: [
    AdminDashComponent,
    AlumniUvComponent,
    DashAdminComponent,
    EmployerApplicationsComponent,
    JobApplicationsComponent,
    JobpostformComponent,
    NavbarComponent,
    VerifyEmpComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
