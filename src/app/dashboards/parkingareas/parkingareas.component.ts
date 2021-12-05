import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ParkingcrudService } from 'src/app/APIservices/services/parkingcrud.service';
import { FeedbackcrudService } from 'src/app/APIservices/services/feedbackcrud.service';
@Component({
  selector: 'app-parkingareas',
  templateUrl: './parkingareas.component.html',
  styleUrls: ['./parkingareas.component.css']
})
export class ParkingareasComponent implements OnInit {
listofareas:any=[]
closeResult: string;
fbbody={
  "user_feedback":'', 
   "userId":localStorage.getItem('uid') 
 }

  constructor(private parking : ParkingcrudService,public router:Router,private modalService: NgbModal,
    private fb : FeedbackcrudService) { }

  ngOnInit(): void {
    this.parking.listarea().subscribe((res)=>{
      this.listofareas=res.data;
      console.log(this.listofareas);
      
    })
  }
  slots(id:any){
    this.router.navigate(['/dashboard/bookyourslot/',id])
  }
  open(content:any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  sweetAlert(title:any,text:any,icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    })
  }
  save(){
   
this.fb.givefeedback(this.fbbody).subscribe((res)=>{
  if (res.status == true) {
this.sweetAlert('successfull','Thankyou for your feedback','success')
  }else{
    this.sweetAlert('error',res.message,'error')

  }

})
  }
logout(){
  localStorage.clear()
  this.router.navigate(['/auth/signin'])
}
}
