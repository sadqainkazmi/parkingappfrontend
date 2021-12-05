import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RolecrudService } from 'src/app/APIservices/services/rolecrud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  listofroles: any = []
  delbody = {
    'id': 0
  }
  constructor(public router: Router, private rolescrud:RolecrudService) { this.listroles() }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/signin'])
  }
  listroles() {
    this.rolescrud.getallrole().subscribe((res) => {
      this.listofroles = res.data
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
    this.rolescrud.deleterole(this.delbody).subscribe((res) => {
      if (res.status == true) {
        this.listofroles.splice(index, 1)
        this.sweetAlert('success', 'record has been deleted', 'success')
        this.listroles();
      } else {
        this.sweetAlert('error', res.message, 'error')
      }
    })
  }
 

}
