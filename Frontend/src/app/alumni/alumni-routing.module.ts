import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { EducationComponent } from './education/education.component';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { ExperienceComponent } from './experience/experience.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';

const routes: Routes = [
  {path:'alumnidashboard/:id', component:DashboardComponent, canActivate:[authGuard]},
  {path:'general-information/:id', component:GeneralInformationComponent, canActivate:[authGuard]},
  {path:'education/:id', component:EducationComponent, canActivate:[authGuard]},
  {path:'experiences/:id', component:ExperienceComponent, canActivate:[authGuard]},
  {path:'alumniviewjobs/:id', component:ViewjobsComponent, canActivate:[authGuard]},
  {path:'appliedjobs', component:ApplyjobsComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
