import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})

export class HomeModalComponent {  

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content : any) {
		this.modalService.open(content, { centered: true });
	}
}