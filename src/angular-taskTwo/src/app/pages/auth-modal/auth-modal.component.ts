import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent{  

	constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content : any) {
		this.modalService.open(content, { centered: true });
	}
}