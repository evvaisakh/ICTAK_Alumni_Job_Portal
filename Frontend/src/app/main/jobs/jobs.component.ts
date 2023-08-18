import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private apiService:SignUpService, private router:Router) {}

  filterString:string=''
  jobs:any=[]

  ngOnInit(): void {
    this.getjob()
  }

  getjob(){
    this.apiService.getJob().subscribe(res=>{
      this.jobs=res
    })
  }
  
  apply(){
    Swal.fire('Info!','Login/Signup to apply for the job.','info');
    this.router.navigate(['/alumnisignup']);
  }

}
