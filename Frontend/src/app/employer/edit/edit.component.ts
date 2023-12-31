import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerApiService } from '../employer-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  data:any={};

  constructor(private route:ActivatedRoute,private api:EmployerApiService,private router:Router) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.api.getSingleJob(this.id).subscribe((res:any)=>{
      this.data=res
      console.log(this.data)
    })
  }
  update(){
    this.api.updatejob(this.data,this.id).subscribe((res:any)=>{
      console.log(this.data) 
      this.data=res
      console.log(res)
      Swal.fire('Info!','Data updated.','info');
      this.ngOnInit()
      this.router.navigate([`/empDash/viewjob`])
    }) 
  }

  backfn(){
    this.router.navigate(['/empDash/dash'])
  }
  
  function(){
    localStorage.removeItem('token')
  }

}
