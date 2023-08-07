import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-signup',
  templateUrl: './emp-signup.component.html',
  styleUrls: ['./emp-signup.component.css']
})
export class EmpSignupComponent implements OnInit {

  employerForm:any = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required,Validators.pattern('^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]),
    phone:new FormControl(null,[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]),
    company:new FormControl(null,Validators.required),
    designation:new FormControl(null,Validators.required),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)])
  });
  constructor(private signup:SignUpService,private router:Router) {}

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.signup.addEmployer(this.employerForm.value).subscribe((res)=>{
      if(res.message){
        alert(res.message)
          this.router.navigate(['/employersignup'])
      }
      else{
        alert('Registered successfully')
        this.router.navigate(['/employerlogin'])
      }
    })
  }
  get Name():FormControl{
    return this.employerForm.get("name") as FormControl;
  }
  get Email():FormControl{
    return this.employerForm.get("email") as FormControl;
  }
  get Phone():FormControl{
    return this.employerForm.get("phone") as FormControl;
  }
  get Designation():FormControl{
    return this.employerForm.get("designation") as FormControl;
  }
  get Company_Name():FormControl{
    return this.employerForm.get("company") as FormControl;
  }
  get Password():FormControl{
    return this.employerForm.get("password") as FormControl;
  }

}
