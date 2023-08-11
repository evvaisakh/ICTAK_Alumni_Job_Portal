import { Component, OnInit } from '@angular/core';
import { EmployerApiService } from '../employer-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  id:any;
  datas:any=[];
  postedBy:any = ''

  constructor(private api:EmployerApiService) {}

  addForm:any=new FormGroup({
    jobTitle:new FormControl('',Validators.required),
    companyName:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    jobSector:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    skills:new FormControl('',Validators.required),   
    description:new FormControl('',Validators.required),
    salaryRange:new FormControl('',Validators.required),
    experience:new FormControl('',Validators.required),
    closingDate:new FormControl('',Validators.required),
    postedBy:new FormControl('')
  })

  ngOnInit(): void {
    this.addForm.value.postedBy =  this.api.getData()
    console.log(this.addForm.value.postedBy);
  }

  onsubmit(){
    this.addForm.value.postedBy =  this.api.getData()
    console.log(this.addForm.value.postedBy);
    this.api.addJob(this.addForm.value).subscribe(res=>{
      console.log(res);
      Swal.fire('Success!','Data saved successfully.','success');
      this.addForm.reset();
    })
  }

}
