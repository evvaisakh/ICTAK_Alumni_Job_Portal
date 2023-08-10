import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { EmpLoginComponent } from './main/emp-login/emp-login.component';
import { EmpSignupComponent } from './main/emp-signup/emp-signup.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { JobsComponent } from './main/jobs/jobs.component';
import { LoginComponent } from './main/login/login.component';
import { AlumniSignupComponent } from './main/alumni-signup/alumni-signup.component';
import { SignUpService } from './main/sign-up.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminApiService } from './admin/admin-api.service';
import { EmployerApiService } from './employer/employer-api.service';
import { AlumniApiService } from './alumni/alumni-api.service';
import { AdminModule } from './admin/admin.module';
import { EmployerModule } from './employer/employer.module';
import { AlumniModule } from './alumni/alumni.module';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AdminLoginComponent,
    EmpLoginComponent,
    EmpSignupComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    JobsComponent,
    LoginComponent,
    AlumniSignupComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AdminModule,
    EmployerModule,
    AlumniModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [SignUpService, EmpLoginComponent,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
AdminApiService, TokenInterceptorService, EmployerApiService, AlumniApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
