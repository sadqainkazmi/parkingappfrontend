import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BookingcrudService } from 'src/app/APIservices/services/bookingcrud.service';
import { ParkingcrudService } from 'src/app/APIservices/services/parkingcrud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parkingareawithslots',
  templateUrl: './parkingareawithslots.component.html',
  styleUrls: ['./parkingareawithslots.component.css']
})
export class ParkingareawithslotsComponent implements OnInit {
  listofparkingareas: any = []
  closeResult:string
  delbody = {
    'id': 0
  }
  pabody=
  {
   
    "parkingarea_name": "",
    "parking_slot": 0
  
}
  constructor( private modalService: NgbModal,public router: Router, private parkingareascrud: ParkingcrudService) { this.listPA() }
  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/signin'])
  }
  listPA() {
    this.parkingareascrud.listarea().subscribe((res) => {
      this.listofparkingareas = res.data
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
    this.parkingareascrud.deleteparkingarea(this.delbody).subscribe((res) => {
      if (res.status == true) {
        this.listofparkingareas.splice(index, 1)
        this.sweetAlert('success', 'record has been deleted', 'success')
        this.listPA();
      } else {
        this.sweetAlert('error', res.message, 'error')
      }
    })
  }
  open(content: any) {
   
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

      save() {
        this.parkingareascrud.createparkingarea(this.pabody).subscribe((res)=>{
          if(res.status == true){
    this.sweetAlert('successful','created','success')
    this.listPA();
          }else{
            this.sweetAlert('error',res.message,'error')
    
          }
        })
    
      }
  
}
