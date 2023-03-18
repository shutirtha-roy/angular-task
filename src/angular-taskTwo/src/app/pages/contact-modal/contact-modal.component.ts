import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent implements OnInit  {
  currentRoute!: string;
  
  constructor(private router: Router, private title: Title) { }

  ngOnInit() : void {
    this.currentRoute = `${this.router.url.replace("/", "")}`;
    this.title.setTitle(this.currentRoute);
    console.log(this.currentRoute);
  }
}
