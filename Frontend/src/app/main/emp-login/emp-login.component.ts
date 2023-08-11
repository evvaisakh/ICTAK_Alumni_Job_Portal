import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  empdata: any = [];
  id: string ='test ID';
  holder: any = [];

  constructor(private router:Router, private signupService:SignUpService) {}

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })
  
  ngOnInit(): void {
    
  }

  login(){ 
    this.signupService.singleemployer(this.loginForm.value).subscribe(res=>{
      console.log("getting user", this.holder._id);
      this.holder = res.user;
      localStorage.setItem('token',res.token)
      if(res.message){
        Swal.fire('Alert!',res.message,'info');
        this.router.navigate(['/employerlogin']);
        this.loginForm.reset();
      }
      else{
        Swal.fire('Success!','Successfully logged in.','success');
       this.router.navigateByUrl(`/empDash/dash/${this.holder._id}`);
      }    
    }) 
  }
  onsubmit(data:any){}

}
