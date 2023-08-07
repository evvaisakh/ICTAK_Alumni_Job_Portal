import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpService } from './main/sign-up.service';
import { AlumniApiService } from './alumni/alumni-api.service';
import { AdminApiService } from './admin/admin-api.service';
import { EmployerApiService } from './employer/employer-api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private signupService:SignUpService, private alumniService:AlumniApiService,
    private adminService:AdminApiService, private employerService:EmployerApiService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.signupService.getToken()
      if(token){
        req = req.clone({
          setHeaders: {Authorization: `Beard ${token}`}
        })
      }
      return next.handle(req);
    }
}
