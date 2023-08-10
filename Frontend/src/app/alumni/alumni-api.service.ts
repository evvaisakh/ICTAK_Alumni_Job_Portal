import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniApiService {

  constructor(private http:HttpClient) { }

  getJob(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/getjobs')
  }

  addjobapplication(data:any){
    return this.http.post('http://localhost:3000/api/application/upload',data)
  }

  getappliedjobs(){
    return this.http.get('http://localhost:3000/api/verifiedjobs/applicatiodata')
  }

  // to fetch data of a single  
  getsinglealumnidata(id:any){
    return this.http.get(`http://localhost:3000/api/alumni/alumni/${id}`)
  }

  alumnigeneraldata(data:any,id:any){
    return this.http.put(`http://localhost:3000/api/alumni/generaldata`,{data,id})
  }

  alumnieducation(data:any, id:any){
    return this.http.put(`http://localhost:3000/api/alumni/alumnieducation`,{data,id})
  }

  alumniexperience(data:any, id:any){
    return this.http.put(`http://localhost:3000/api/alumni/alumniexperience`,{data,id})
  }

  alumniexperienceremove(id:any){
    return this.http.delete(`http://localhost:3000/api/alumni/deleteexperience/${id}`)
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
