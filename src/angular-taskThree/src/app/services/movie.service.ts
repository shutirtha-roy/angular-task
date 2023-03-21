import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from '../../assets/data/IMovie';
import { Movie } from '../../assets/data/Movie';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesList: IMovie[] = [];

  constructor() { 
  }

  setMovies() : Observable<IMovie[]>{
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: "", photoUpload: "", subtitle: "", description: ""}));
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: "", photoUpload: "", subtitle: "", description: ""}));
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: "", photoUpload: "", subtitle: "", description: ""}));
    return of(this.moviesList);
  }

  getMovies() : Observable<IMovie[]>{
    return of(this.moviesList);
  }

  public createMovie(title: string, photoUpload: string, subtitle: string, description: string) {
    this.moviesList.push(new Movie({ id: Guid.create().toString(), title: title, photoUpload: photoUpload, subtitle: subtitle, description: description}));
  }
}
