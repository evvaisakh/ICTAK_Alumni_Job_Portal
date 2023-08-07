import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { AddjobComponent } from './addjob/addjob.component';
import { DashboComponent } from './dashbo/dashbo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { ViewjobComponent } from './viewjob/viewjob.component';


@NgModule({
  declarations: [
    AddjobComponent,
    DashboComponent,
    DashboardComponent,
    EditComponent,
    FooterComponent,
    ViewjobComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ]
})
export class EmployerModule { }
