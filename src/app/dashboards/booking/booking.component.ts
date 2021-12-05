import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BookingcrudService } from 'src/app/APIservices/services/bookingcrud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  listofbookings: any = []
  delbody = {
    'id': 0
  }
  constructor(public router: Router, private bookingcrud: BookingcrudService) { this.listbookings() }

  ngOnInit(): void {
  }
  listbookings() {
    this.bookingcrud.listbookedslots().subscribe((res) => {
      this.listofbookings = res.data
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
    this.bookingcrud.cancelbooking(this.delbody).subscribe((res) => {
      if (res.status == true) {
        this.listofbookings.splice(index, 1)
        this.sweetAlert('success', 'record has been deleted', 'success')
        this.listbookings();
      } else {
        this.sweetAlert('error', res.message, 'error')
      }
    })
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/signin'])
  }
  
}
