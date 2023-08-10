import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  empdata:any=[]
  Id:string  = 'test ID'
  holder:any=[]

  constructor(private router:Router, private signupService:SignUpService) {}

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })
  
  ngOnInit(): void {
    
  }

  login(){ 
    this.signupService.singleemployer(this.loginForm.value).subscribe(res=>{
      this.holder = res.user
      console.log("getting user", this.holder._id)
      localStorage.setItem('token',res.token)
      if(res.message){
        alert(res.message)
        alert("Invalid Login or Admin not verified your data yet!!")
        this.router.navigate(['/employerlogin'])
      }
      else{
        alert("Successfully logged in")
       this.router.navigateByUrl(`/empDash/dash/${this.holder._id}`)
      }    
    }) 
  }
  onsubmit(data:any){}

}
