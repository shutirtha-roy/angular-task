import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent  implements OnInit {
  currentRoute!: string;
  
  constructor(private router: Router, private title: Title) { }

  ngOnInit() : void {
    this.currentRoute = `${this.router.url.replace("/", "")}`;
    this.title.setTitle(this.currentRoute);
    console.log(this.currentRoute);
  }
}