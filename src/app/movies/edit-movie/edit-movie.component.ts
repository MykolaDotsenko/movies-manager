import { Component, Input, numberAttribute } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { MoviesFormComponent } from '../movies-form/movies-form.component';
import { MultipleSelectorDTO } from '../../shared/components/multiple-sector/MultipleSelectorDTO';

@Component({
  selector: 'app-edit-movie',
  imports: [MoviesFormComponent],
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
      'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
  };

  nonSelectedGenres: MultipleSelectorDTO[] = [
    { key: 1, description: 'Drama' },

    { key: 3, description: 'Comedy' },
  ];

  selectedGenres: MultipleSelectorDTO[] = [{ key: 2, description: 'Action' }];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    { key: 1, description: 'Acropolis' }
  ];

  selectedTheaters: MultipleSelectorDTO[] = [
    { key: 2, description: 'Agora Mall' }
  ];

  saveChanges(movie: MovieCreationDTO) {
    console.log('Editing the movie', movie);
  }
}
