import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Movie } from './movie';

export interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

export class MoviesStore extends ComponentStore<MovieState> {
  constructor() {
    super(initialState);
  }

  readonly movies$: Observable<Movie[]> = this.select((state) => state.movies);

  readonly addMovie = this.updater((state, movie: Movie) => ({
    movies: [...state.movies, movie],
  }));
}
