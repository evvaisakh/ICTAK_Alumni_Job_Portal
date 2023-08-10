import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component' ;
import { AlumniSignupComponent } from './main/alumni-signup/alumni-signup.component';
import { EmpSignupComponent } from './main/emp-signup/emp-signup.component';
import { EmpLoginComponent } from './main/emp-login/emp-login.component';
import { LoginComponent } from './main/login/login.component';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { JobsComponent } from './main/jobs/jobs.component';

const routes: Routes = [{path:'',pathMatch:'full',redirectTo:'home'},
{path:'home',component:HomeComponent},
{path:'alumnisignup',component:AlumniSignupComponent},
{path:'employersignup',component:EmpSignupComponent},
{path:'employerlogin',component:EmpLoginComponent},
{path:'alumnilogin',component:LoginComponent},
{path:'adminlogin',component:AdminLoginComponent},
{path:'jobs',component:JobsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
