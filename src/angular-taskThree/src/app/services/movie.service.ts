import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from '../../assets/data/IMovie';
import { Movie } from '../../assets/data/Movie';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit {
  moviesList: IMovie[] = [];

  constructor() { 
  }

  ngOnInit() : void {
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: "", photoUpload: "", subtitle: "", description: ""}));
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: "", photoUpload: "", subtitle: "", description: ""}));
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: "", photoUpload: "", subtitle: "", description: ""}));
  }

  getMovies() : Observable<IMovie[]>{
    return of(this.moviesList);
  }

  public createMovie(title: string, photoUpload: string, subtitle: string, description: string) {
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: title, photoUpload: photoUpload, subtitle: subtitle, description: description}));
  }
}