import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumniApiService } from '../alumni-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private alumniApi:AlumniApiService, private router:Router, private route:ActivatedRoute) {}

  id:any=''
  data:any=[]
    holder={
      company:'',
      Designation:'',
      presently_working:'',
      starting_date:'',
      ending_date:'',
      current_monthly_salary:'',
      notice_period:''
    }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.alumniApi.getsinglealumnidata(this.id).subscribe((res:any)=>{
      this.data=res.experience
      console.log(this.data)
    });
  }

  onsubmit(){
    this.data.push(this.holder)
    console.log(this.data); 
    this.alumniApi.alumniexperience(this.data, this.id).subscribe(res=>{
      console.log(res)
      this.data=res
      Swal.fire('Info!','Data updated successfully.','info');
      this.ngOnInit()
      this.router.navigate([`alumnidashboard/${this.id}`])
    });
  }
  back(){
    history.back()
  }

}
