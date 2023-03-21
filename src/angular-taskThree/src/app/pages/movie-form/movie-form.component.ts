import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if(form.invalid)
      console.log("Invalid xD");
  }
}