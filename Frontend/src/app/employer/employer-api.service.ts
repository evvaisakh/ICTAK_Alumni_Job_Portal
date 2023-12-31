import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {
  apiUrl:any=('http://localhost:3000/api')

  constructor(private http:HttpClient) { }

  addJob(data:any){
    return this.http.post(`${this.apiUrl}/verifiedjobs/postjob`,data)
  }
  getJob(){
    return this.http.get(`${this.apiUrl}/verifiedjobs/getempjobs`)
  }
  getSingleJob(id:any){
    return this.http.get(`${this.apiUrl}/verifiedjobs/getOneJob/${id}`)
  }
  getsingleemp(id:any){
    return this.http.get(`${this.apiUrl}/employer/singleemp/${id}`)
  }
  updatejob(data:any,id:any){
    return this.http.put(`${this.apiUrl}/verifiedjobs/editJob`,{data,id})
  }
  applicationforjob(id:any){
    return this.http.get(`http://localhost:3000/api/application/applicationdatas/${id}`)
  }
  getsinglealumnidata(id:any){
    return this.http.get(`http://localhost:3000/api/alumni/alumni/${id}`)
  }
  download(id:any){
   return this.http.get(`http://localhost:3000/api/application/download/${id}`)
  }
  getappliedjobs(){
   return this.http.get(`http://localhost:3000/api/verifiedjobs/getjob/`)
  }

  getemployerjobs(id:any){
   console.log(id);
   return this.http.get(`http://localhost:3000/api/verifiedjobs/getidjob/${id}`)
  }

  getalumnilength(){
   return this.http.get(`${this.apiUrl}/alumni/alumniVer`)
  }
  getapplicationlength(){
   return this.http.get(`${this.apiUrl}/application/Apps`)
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
  data:any // emp id

  setData(data:any){
   this.data = data
  }

  getData(){
   return this.data
  }
}
