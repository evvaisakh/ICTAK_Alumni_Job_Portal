import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './admin-dash.component';
import { AlumniUvComponent } from './components/alumni-uv/alumni-uv.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { EmployerApplicationsComponent } from './components/employer-applications/employer-applications.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import { JobpostformComponent } from './components/jobpostform/jobpostform.component';
import { VerifyEmpComponent } from './components/verify-emp/verify-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminApiService } from './admin-api.service';
import { authGuard } from './auth.guard';



@NgModule({
  declarations: [
    AdminDashComponent,
    AlumniUvComponent,
    DashAdminComponent,
    EmployerApplicationsComponent,
    JobApplicationsComponent,
    JobpostformComponent,
    VerifyEmpComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CarouselModule
  ],
  providers:[AdminApiService]
})
export class AdminModule { }
