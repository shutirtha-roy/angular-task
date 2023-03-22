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
  hasWrongTitleFormat: boolean = false;
  hasWrongFileFormat: boolean = false;
  hasWrongSubtitleFormat: boolean = false;
  hasWrongDescriptionFormat: boolean = false;
  fileExtensionList: string[] = ['png', 'jpg'];
  movieList: IMovie[] = this.movieService.moviesList;
  filteredList: IMovie[] = [];
  searchValue: string = '';
  hasSearched: boolean = false;

  constructor(private movieService: MovieService) { }

  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
    this.filteredList = [];
    this.movieList.forEach(movie => {
      if(movie.title.toLowerCase().includes(this.searchValue.toLowerCase()))
      {
          this.filteredList.push(movie);
        
      }
    });

    this.hasSearched = true;
  }

  onSubmit(form: NgForm) {
    let fileSize: number = this.file.size / 1024;
    let fileExtension: string = this.file.name.split('.')[1];

    if(form.value.title.length >= 10 && form.value.title.length <= 12)
    {
      this.hasWrongTitleFormat = false;
    }
    else
    {
      this.hasWrongTitleFormat = true;
    }

    if(fileSize <= 200 && this.fileExtensionList.includes(fileExtension.toLowerCase()))
    {
      this.hasWrongFileFormat = false;
    }
    else 
    {
      this.hasWrongFileFormat = true;
    }

    if(form.value.subtitle.length >= 50 && form.value.subtitle.length <= 1000)
    {
      this.hasWrongSubtitleFormat = false;
    }
    else
    {
      this.hasWrongSubtitleFormat = true;
    }

    if(form.value.description.length >= 50 && form.value.description.length <= 1000)
    {
      this.hasWrongDescriptionFormat = false;
    }
    else
    {
      this.hasWrongDescriptionFormat = true;
    }

    if(this.hasWrongFileFormat || this.hasWrongTitleFormat || this.hasWrongSubtitleFormat || this.hasWrongDescriptionFormat)
    {
      return;
    }
    
    this.movieService.createMovie(form.value.title, this.base64code, form.value.subtitle, form.value.description);
    this.hasSearched = false;
  }

  getImage(event: any)
  {
    this.file = event.target.files[0];
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