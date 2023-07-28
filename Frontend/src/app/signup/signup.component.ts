import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route:Router, private http:HttpClient) {}
  signup:FormGroup|any;
  signuser:any;

  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password': new FormControl()
    })
  }
  signupdata(singup:FormGroup){
    //console.log(this.singup.value);
    this.signuser = this.signup.value.fname
    this.http.post<any>("http://localhost:3000/signup", this.signup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.signup.reset();
      this.route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
    })

  }

  sbtn(){
   
    this.route.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }
}
