import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
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
export class MoviesPageComponent implements OnInit {
  constructor(
    private readonly store: MoviesStore,
    private readonly service: MovieService
  ) {}

  movies$ = this.store.movies$;

  ngOnInit(): void {
    this.service
      .getMovie('#001')
      .subscribe((movie) => this.store.addMovie(movie));
  }
}
