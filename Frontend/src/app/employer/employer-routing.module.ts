import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboComponent } from './dashbo/dashbo.component';
import { AddjobComponent } from './addjob/addjob.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{path: 'empDash', component: DashboardComponent, canActivate:[authGuard],
  children: [{ path: 'dash/:id', component:DashboComponent},
  { path: 'job', component: AddjobComponent},
  { path: 'dash', component: DashboComponent},
  {path: 'viewjob', component: ViewjobComponent}]},
  {path: 'edit/:id', component: EditComponent},
  {path: 'Home', component:DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
