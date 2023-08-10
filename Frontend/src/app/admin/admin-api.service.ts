import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http:HttpClient) { }

  postJob(data:any){
    return this.http.post('http://localhost:3000/api/verifiedjobs/postjob', data)
  }

  postmail(data:any, email:any, name:any){
    console.log(data, email, name)
    return this.http.post('http://localhost:3000/api/nodemailer/alumnimail', {data, email, name})
  }

  getalumni(){
    return this.http.get('http://localhost:3000/api/alumni/alumnis')
  }

  postalumni(){
    return this.http.get('http://localhost:3000/api/alumni/alumnisignup')
  }

  getalumniV(){
    return this.http.get('http://localhost:3000/api/alumni/alumniVer')
  }

  approvealumni(data:any){
    return this.http.put(`http://localhost:3000/api/alumni/onealumni`,data)
  }

  deletealumni(id:any){
    return this.http.delete(`http://localhost:3000/api/alumni/deletealumni/${id}`)
  }

  getEmp(){
    return this.http.get('http://localhost:3000/api/employer/employers')
  }

  getEmpV(){
    return this.http.get('http://localhost:3000/api/employer/employersV')
  }

  deleteemp(id:any){
    return this.http.delete(`http://localhost:3000/api/employer/deleteemployer/${id}`)
  }

  approveemp(data:any){
    return this.http.put(`http://localhost:3000/api/employer/verifyemp`, data)
  } 

  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getadminjob')
  }
  
  getempappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getempjob')
  }

  applicationforjob(id:any){
    return this.http.get(`http://localhost:3000/api/application/applicationdata/${id}`)
  }

  applicationUVjob(){
    return this.http.get(`http://localhost:3000/api/application/UVApps`)
  }

  applicationVjob(){
    return this.http.get(`http://localhost:3000/api/application/VApps`)
  }

  getsinglealumnidata(id:any){
    return this.http.get(`http://localhost:3000/api/alumni/alumni/${id}`)
  }

  deleteApplication(id:any){
    return this.http.delete(`http://localhost:3000/api/application/delete/${id}`)
  }

  verifyApplication(id:any){
    return this.http.put('http://localhost:3000/api/application/verify/', {id})
  }

  download(id:any){
    return this.http.get(`http://localhost:3000/api/application/download/${id}`)
  }

  deleteJob(id:any){
    return this.http.delete(`http://localhost:3000/api/verifiedjobs/deletejob/${id}`)
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
