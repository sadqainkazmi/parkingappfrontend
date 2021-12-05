import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingcrudService } from 'src/app/APIservices/services/parkingcrud.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BookingcrudService } from 'src/app/APIservices/services/bookingcrud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  listofslots: any = []
  closeResult: string;
  uid:any = localStorage.getItem('uid');
  bookingbody = {
    "is_booked": true,
    "end_time": "",
    "start_time": "",
    "end_date": "",
    "start_date": "",
    "userId": parseInt(this.uid),
    "slotId": 0,
    "parkingareaId": 0
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private slots: ParkingcrudService,private bookslot:BookingcrudService, private modalService: NgbModal) {
  }
  sweetAlert(title:any,text:any,icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    })
  }
  ngOnInit(): void {
  this.totalslots()
  }
  totalslots(){
    let id: any = this.activatedRoute.snapshot.params['parkingareaid']
    let body = {
      "parkingareaId": id
    }
    this.slots.getslotsbyareaid(body).subscribe((res) => {
      this.listofslots = res.data
      console.log(this.listofslots);


    })
  }
  open(content: any, data: any) {
console.log(data);
this.bookingbody.slotId=data.id
this.bookingbody.parkingareaId=data.parkingareaId
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
  logout() {
    localStorage.clear()
    this.router.navigate(['/auth/signin'])
  }
  booking() {
    this.bookslot.bookparkingslot(this.bookingbody).subscribe((res)=>{
      if(res.status == true){
this.sweetAlert('successful','slot has been booked','success')
this.totalslots()
      }else{
        this.sweetAlert('error',res.message,'error')

      }
    })

  }

}
