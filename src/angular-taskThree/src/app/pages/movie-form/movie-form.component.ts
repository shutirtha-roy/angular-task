import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  file: any;
  base64code!: any;
  hasWrongFileSize: boolean = false;

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);

    console.log(this.file.size / 1024);
    let fileSize: number = this.file.size / 1024;

    if(fileSize > 200)
    {
      this.hasWrongFileSize = true;
    }
    

    if(form.invalid)
      console.log("Invalid xD");
  }

  getImage(event: any)
  {
    this.file = event.target.files[0];
    console.log(event.target.files)
    console.log(this.file);
    console.log(this.file.name);
    console.log(this.file.size);

    if(this.file.size < 47)
    {
      this.hasWrongFileSize = true;
      return;
    }
      
    this.hasWrongFileSize = false;
    this.convertToBase64(this.file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d)
      this.base64code = d
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}