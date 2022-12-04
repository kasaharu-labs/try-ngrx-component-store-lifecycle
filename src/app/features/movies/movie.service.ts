import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovie(id: string): Observable<Movie> {
    return of({ id, name: `movie-${id}` });
  }
}
