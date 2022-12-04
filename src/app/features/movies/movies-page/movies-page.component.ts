import { Component } from '@angular/core';
import { MoviesStore } from './movies.store';

@Component({
  selector: 'app-movies-page',
  template: `
    <div>Movie List</div>
    <li *ngFor="let movie of movies$ | async">
      {{ movie.name }}
    </li>
  `,
  providers: [MoviesStore],
})
export class MoviesPageComponent {
  constructor(private readonly store: MoviesStore) {}

  movies$ = this.store.movies$;
}
