import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { EmployerApplicationsComponent } from './components/employer-applications/employer-applications.component';
import { JobApplicationsComponent } from './components/job-applications/job-applications.component';
import { VerifyEmpComponent } from './components/verify-emp/verify-emp.component';
import { authGuard } from './auth.guard';
import { JobpostformComponent } from './components/jobpostform/jobpostform.component';
import { AlumniUvComponent } from './components/alumni-uv/alumni-uv.component';

const routes: Routes = [
  {path:'adminDash', component:AdminDashComponent},
  {path:'jobpost', component:JobpostformComponent, canActivate:[authGuard]},
  {path:'verifyalumni', component:AlumniUvComponent, canActivate:[authGuard]},
  {path:'verifyemp', component:VerifyEmpComponent, canActivate:[authGuard]},
  {path:'adminjobsandapplies', component:JobApplicationsComponent, canActivate:[authGuard]},
  {path:'empjobsandapplies', component:EmployerApplicationsComponent, canActivate:[authGuard]},
  {path:'dashadmin', component:DashAdminComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
