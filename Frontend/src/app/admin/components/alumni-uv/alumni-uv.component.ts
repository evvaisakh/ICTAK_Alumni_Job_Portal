import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-alumni-uv',
  templateUrl: './alumni-uv.component.html',
  styleUrls: ['./alumni-uv.component.css']
})
export class AlumniUvComponent implements OnInit {

  feedbackForm:any = new FormGroup({
    'feedback' : new FormControl('')
  });

  alumniData:any = []
  verified:any = []

  constructor(private api: AdminApiService) {}

  ngOnInit(): void {
    this.getAlumni()
  }

  onSubmit(name:string, email:string){            // send email via nodemailer                                             
    console.log(this.feedbackForm.value);
    window.alert(" Feedback Send !!")
    this.api.postmail(this.feedbackForm.value, email, name).subscribe(res=>{
      console.log(res);
    })
  }

  getAlumni(){              // fetch alumni data
    this.api.getalumni().subscribe(res=>{
      this.alumniData = res;
      console.log(this.alumniData);      
    })
  }

  approve(data:any){   // approval
    data.approval_status  = "verified"
    this.verified = data
    this.api.approvealumni(this.verified).subscribe( res =>{
      console.log(res);
      window.alert(" Approved ")
      this.getAlumni()
    })
  }

  delete(id:any){          // alumni delete
    if(window.confirm(" Are you sure to delete this ? ")){
      this.api.deletealumni(id).subscribe( res =>{
        this.getAlumni()
      })
    }
  }

  function(){
    localStorage.removeItem('token')
  }

}
