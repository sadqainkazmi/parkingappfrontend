import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/APIservices/services/auth.service';
import { RolecrudService } from 'src/app/APIservices/services/rolecrud.service';
import { LoginGuardService } from 'src/app/APIservices/helpers/loginguard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinBody={
   
    "email":'',
    "password":'',
   
  
  }
  listofroles:any=[]
  constructor(private router: Router,private auth:AuthService,private roles:RolecrudService,private guard : LoginGuardService) { }



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
  signin(){
   
    this.auth.signin(this.signinBody).subscribe((res)=>{
      if (res.status == true) {
        console.log(res);
        
          
           if(res.data.userRole.rolename ==  'Admin' || res.data.userRole.rolename ==  'admin' ){
         console.log('if');
         
            this.router.navigate(['/dashboard/listparkingareaslots']);
           }else{
            console.log('else');
         
            this.router.navigateByUrl('/dashboard/customerdashboard');

           }
            
     
          //  this.sweetAlert('Signinp Successfull','user has been signup sucesfuuly','success')
          localStorage.setItem('role',res.data.userRole.rolename)
          localStorage.setItem('accesstoken',res.token)
          localStorage.setItem('uid',res.data.id)
           this.guard.isLoggedIn = true;
           return localStorage.setItem('logvalue', JSON.stringify(this.guard.isLoggedIn));
      }else{
        this.sweetAlert('UnSuccessfull',res.message,'error')

      }

    })
  }
}
