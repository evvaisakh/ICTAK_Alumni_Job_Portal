import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniRoutingModule } from './alumni-routing.module';
import { FilterPipe } from './filter.pipe';
import { ApplyjobsComponent } from './applyjobs/applyjobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { HeaderComponent } from './header/header.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlumniApiService } from './alumni-api.service';
import { authGuard } from './auth.guard';


@NgModule({
  declarations: [
    FilterPipe,
    ApplyjobsComponent,
    DashboardComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    GeneralInformationComponent,
    HeaderComponent,
    ViewjobsComponent
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers:[AlumniApiService]
})
export class AlumniModule { }
