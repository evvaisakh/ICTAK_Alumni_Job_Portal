import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router, private signupService:SignUpService) {}

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  });

  ngOnInit(): void {
    
  }

  userverify(){
    console.log(this.loginForm.value)
    let data=this.loginForm.value
    this.signupService.loginadmin(data).subscribe(res=>{
      console.log('data from backend',res)
      localStorage.setItem('token',res.token)
      if(res.message){
        Swal.fire('Error!', 'Invalid username or password.', 'error');
        this.router.navigate(['/adminlogin']);
      }
      else{
        Swal.fire('Success!','Admin successfully logged in.','success');
        this.router.navigate(['/dashadmin']);
      } 
    })
  };

}
