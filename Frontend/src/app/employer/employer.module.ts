import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRoutingModule } from './employer-routing.module';
import { AddjobComponent } from './addjob/addjob.component';
import { DashboComponent } from './dashbo/dashbo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authGuard } from './auth.guard';

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
    EmployerRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers:[authGuard]
})
export class EmployerModule { }
