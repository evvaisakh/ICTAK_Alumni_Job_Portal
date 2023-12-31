import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-verify-emp',
  templateUrl: './verify-emp.component.html',
  styleUrls: ['./verify-emp.component.css']
})
export class VerifyEmpComponent implements OnInit {

  feedbackForm:any = new FormGroup({
    'feedback' : new FormControl('')
  })

  //*all declarations

  employerData:any = []
  verified: any = []

  constructor(private api: AdminApiService) {}

  ngOnInit(): void {
    this.getEmp()
  }

  //*all functions

  onSubmit(name:string, email:string){
    console.log(this.feedbackForm.value);
    window.alert("Feedback Send")
    this.api.postmail(this.feedbackForm.value, email, name).subscribe(res=>{
      console.log(res)
    })
  }

  getEmp(){              // fetch all employer data
    this.api.getEmp().subscribe(res =>{
      this.employerData = res;
      console.log(this.employerData);
    })
  }

  delete(id:any){
    if(window.confirm("Are you sure to delete this?")){
      this.api.deleteemp(id).subscribe( res=>{
        this.getEmp()
      })
    }
  }

  approve(data:any){   // approval
    data.approval_status  = "verified"
    this.verified = data
    this.api.approveemp(this.verified).subscribe( res =>{
      console.log(res);
      window.alert(" Approved ")
      this.getEmp()
    })
  } 
  function(){
    localStorage.removeItem('token')
  }

}
