import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsercrudService } from 'src/app/APIservices/services/usercrud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listofusers: any = []
  delbody = {
    'id': 0
  }
  constructor(public router: Router, private userscrud: UsercrudService) { this.listusers() }

  ngOnInit(): void {
  }
  listusers() {
    this.userscrud.getuserall().subscribe((res) => {
      this.listofusers = res.data
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
    this.userscrud.deleteuser(this.delbody).subscribe((res) => {
      if (res.status == true) {
        this.listofusers.splice(index, 1)
        this.sweetAlert('success', 'record has been deleted', 'success')
        this.listusers();
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
