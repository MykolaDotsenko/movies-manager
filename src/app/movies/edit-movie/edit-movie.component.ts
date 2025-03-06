import { Component, Input, numberAttribute } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';

@Component({
  selector: 'app-edit-movie',
  imports: [],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css',
})
export class EditMovieComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  model: MovieDTO = {
    id: 1,
    title: 'Spider-Man: Across the Spider-Verse',
    releaseDate: new Date('2018-07-22'),
    trailer: 'abcd',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTcwNTU5OTUyNw@@._V1_FMjpg_UX1000_.jpg',
  };

  saveChanges(movie: MovieCreationDTO) {
    console.log('Editing the movie', movie);
  }
}
