import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from '../../assets/data/IMovie';
import { Movie } from '../../assets/data/Movie';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesList: IMovie[] = [];

  constructor() { 
  }

  setMovies() : Observable<IMovie[]>{
    this.moviesList.push(new Movie({ id: "28030dc6-e60c-4aba-ba9b-0371fdf50416", title: "", photoUpload: "", subtitle: "", description: ""}));
    this.moviesList.push(new Movie({ id: "18304846-0582-464d-82a5-ac558b272a66", title: "", photoUpload: "", subtitle: "", description: ""}));
    this.moviesList.push(new Movie({ id: "86d40c8d-6e00-484b-9a8b-114645e0a4d5", title: "", photoUpload: "", subtitle: "", description: ""}));
    return of(this.moviesList);
  }

  public createMovie(title: string, photoUpload: string, subtitle: string, description: string) {
    this.moviesList.push(new Movie({ id: ""}))
  }
}
