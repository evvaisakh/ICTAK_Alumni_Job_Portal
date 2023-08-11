import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private signupService:SignUpService) {}

  alumnidata:any=[]
  holder:any=[]
  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  }) 

  ngOnInit(): void {
    
  }
  
  login(){
    this.signupService.getalumnilogin(this.loginForm.value).subscribe(res=>{
      if(res.message){
       Swal.fire('Alert!','Invalid login or Admin not verified your data yet.','info');
       this.router.navigate(['/alumnilogin']);
      } 
      else{
        this.holder = res.data
        console.log(res)
        console.log('token',res.token);
        localStorage.setItem('token',res.token);
        Swal.fire('Success!', 'You have successfully logged in.', 'success');
        this.router.navigateByUrl(`/alumnidashboard/${this.holder._id}`);
      } 
    })
  }

}
