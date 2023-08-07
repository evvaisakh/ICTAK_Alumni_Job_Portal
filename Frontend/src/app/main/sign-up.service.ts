import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  apiURL:any='http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  addData(data:any){
    return this.http.post<any>(`${this.apiURL}/alumni/alumnisignup`,data)
  }
  addEmployer(data:any){
    return this.http.post<any>(`${this.apiURL}/employer/employersignup`,data)
  }
  emplogin(data:any){
    return this.http.post<any>(`${this.apiURL}/employer/emplogin`,data)
  }
  getalumnilogin(data:any){
    return this.http.post<any>(`http://localhost:3000/api/alumni/singlealumni`,data)
  }
  getsingleemplogin(data:any){
    return this.http.get<any>(`${this.apiURL}/employer/singleemp`,data)
  }
  getemployerlogin(){
    return this.http.get<any>(`${this.apiURL}/employer/employerlist`)
  }
  getJob(){
    return this.http.get<any>('http://localhost:3000/api/verifiedJobs/getjobs')
  }
  singleemployer(data:any){
    return this.http.post<any>(`${this.apiURL}/employer/employer`,data)
  }
  loginadmin(data:any){
    return this.http.post<any>('http://localhost:3000/api/login/loginadmin',data)
  }
  getToken(){
    return localStorage.getItem('token');
   }
   loggedIn(){
    return !!localStorage.getItem('token');
   }
   loggedOut(){
    return localStorage.removeItem('token');
   }
}
