import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
export class MoviesPageComponent implements OnInit, OnDestroy {
  constructor(
    private readonly store: MoviesStore,
    private readonly service: MovieService
  ) {}

  movies$ = this.store.movies$;
  private onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this.service
      .getMovie('#001')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((movie) => this.store.addMovie(movie));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
