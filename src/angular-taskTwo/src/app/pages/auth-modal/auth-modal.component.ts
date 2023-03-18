import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {
  currentRoute!: string;
  
  constructor(private router: Router, private title: Title) { }

  ngOnInit() : void {
    this.currentRoute = `${this.router.url.replace("/", "")}`;
    this.title.setTitle(this.currentRoute);
    console.log(this.currentRoute);
  }
}