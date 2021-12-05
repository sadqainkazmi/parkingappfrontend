import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackcrudService } from 'src/app/APIservices/services/feedbackcrud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  listoffeedbacks: any = []
  delbody = {
    'id': 0
  }
  fbbody={
    "admin_reply":'', 
     "id":0 
   }
  closeResult: string;
  constructor(public router: Router, private feedbackcrud:FeedbackcrudService,private modalService: NgbModal ) { this.listfeedbacks() }

  ngOnInit(): void {
  }
  listfeedbacks() {
    this.feedbackcrud.listfeedbacks().subscribe((res) => {
      this.listoffeedbacks = res.data
    })
  }
  sweetAlert(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    })
  }
  delete(id: any, index: any) {
    this.delbody.id = id
    this.feedbackcrud.deletefeedback(this.delbody).subscribe((res) => {
      if (res.status == true) {
        this.listoffeedbacks.splice(index, 1)
        this.sweetAlert('success', 'record has been deleted', 'success')
        this.listfeedbacks();
      } else {
        this.sweetAlert('error', res.message, 'error')
      }
    })
  }
  logout(){
      localStorage.clear()
    this.router.navigate(['/auth/signin'])
    }
    reply(content:any,id:any) {
     
      
this.fbbody.id=id
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
    save(){
      console.log(this.fbbody);
      
   
      this.feedbackcrud.reply(this.fbbody).subscribe((res)=>{
        if (res.status == true) {
          this.listfeedbacks();
      this.sweetAlert('successfull','submitted','success')
        }else{
          this.sweetAlert('error',res.message,'error')
      
        }
      
      })
        }
  

}
