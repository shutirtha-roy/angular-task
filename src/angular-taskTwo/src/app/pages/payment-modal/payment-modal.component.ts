import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent{
  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content : any) {
		this.modalService.open(content, { centered: true });
	}
}