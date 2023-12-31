import { Component, ViewChild, OnInit } from '@angular/core';
import { EmpLoginComponent } from 'src/app/main/emp-login/emp-login.component';
import { EmployerApiService } from '../employer-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
  ID:any
  @ViewChild(EmpLoginComponent)
  child!: EmpLoginComponent;
  condition: String ="" 
  jobs: any
  applications: any=''
  profile: any=''

  constructor(private api:EmployerApiService,private router:Router, public emp:EmpLoginComponent, private actroute:ActivatedRoute) {}

  ngOnInit(): void {
    this.ID = this.api.getData()
    console.log('from view jobs:',this.ID)
    this.getjob()
  }

  getjob(){
    this.api.getemployerjobs(this.ID).subscribe(async res=>{
      this.jobs = res
      console.log(this.jobs[0])
    })
  }

  getSingleJob(id:any){
    this.router.navigate([`/edit/${id}`])
  }

  view(id:any){
    this.api.applicationforjob(id).subscribe(res=>{
      this.applications = res
      if(this.applications.length > 0){
        this.condition = `Number of Applications: ${this.applications.length}`
      }else{
        this.condition = "No Applicants yet!"
      }
      console.log(this.applications.length);
      console.log(this.applications);
    })
  }

  getprofile(id:any){
    this.api.getsinglealumnidata(id).subscribe(res=>{
      console.log(res)
      this.profile = res
      console.log(this.profile.name, this.profile.education.qualification);
    })
  }

  search(){
    for ( var job of this.jobs){
      let find = job.postedBy;
      console.log(find);
    }
  }

}
