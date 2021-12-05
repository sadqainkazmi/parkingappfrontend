import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/APIservices/services/auth.service';
import { RolecrudService } from 'src/app/APIservices/services/rolecrud.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupBody={
    "user_name":'',
    "first_name":'',
    "last_name":'',
    "email":'',
    "password":'',
    "is_acive":true,
    "roleId":0,
  
  }
  listofroles:any=[]
  constructor(private router: Router,private auth:AuthService,private roles:RolecrudService) { }

  ngOnInit(): void {
this.roles.getallrole().subscribe((res)=>{
  this.listofroles=res.data
})
  }
 sweetAlert(title:any,text:any,icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    })
  }
  signUp(){
   
    this.auth.signup(this.signupBody).subscribe((res)=>{
      if (res.status == true) {
this.sweetAlert('Signup Successfull','user has been signup sucesfuuly','success')
      }else{
        this.sweetAlert('UnSuccessfull','user doesnot signup sucesfuuly','error')

      }

    })
  }

}
