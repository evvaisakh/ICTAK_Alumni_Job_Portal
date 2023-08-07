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
    AlumniRoutingModule
  ]
})
export class AlumniModule { }
