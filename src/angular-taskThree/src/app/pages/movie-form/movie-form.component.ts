import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/assets/data/IMovie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  file: any;
  base64code!: any;
  hasWrongFileFormat: boolean = false;
  fileExtensionList: string[] = ['png', 'jpg'];
  movieList: IMovie[] = this.movieService.moviesList;

  constructor(private movieService: MovieService) { }

  onSubmit(form: NgForm) {
    let fileSize: number = this.file.size / 1024;
    let fileExtension: string = this.file.name.split('.')[1];

    if(fileSize <= 200 && this.fileExtensionList.includes(fileExtension.toLowerCase()))
    {
      this.hasWrongFileFormat = false;
    }
    else 
    {
      this.hasWrongFileFormat = true;
      return;
    }
    
    this.movieService.createMovie(form.value.title, this.base64code, form.value.subtitle, form.value.description);
  }

  getImage(event: any)
  {
    this.file = event.target.files[0];
    console.log(event.target.files)
    console.log(this.file);
    console.log(this.file.name);
    console.log(this.file.size);

    this.convertToBase64(this.file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.base64code = d
      console.log(d);
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