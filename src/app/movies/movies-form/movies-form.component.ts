import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import moment from 'moment';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { MultipleSectorComponent } from '../../shared/components/multiple-sector/multiple-sector.component';
import { MultipleSelectorDTO } from '../../shared/components/multiple-sector/MultipleSelectorDTO';
import { ActorsAutocompleteComponent } from '../../actors/actors-autocomplete/actors-autocomplete.component';
import { ActorAutoCompleteDTO } from '../../actors/actors.models';

@Component({
  selector: 'app-movies-form',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatDatepickerModule,
    InputImgComponent,
    MultipleSectorComponent,
    ActorsAutocompleteComponent
  ],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css',
})
export class MoviesFormComponent implements OnInit {
  @Input()
  model?: MovieDTO;

  @Output()
  postForm = new EventEmitter<MovieCreationDTO>();

  @Input({ required: true })
  selectedGenres!: MultipleSelectorDTO[];

  @Input({ required: true })
  nonSelectedGenres!: MultipleSelectorDTO[];

  @Input({ required: true })
  selectedTheaters!: MultipleSelectorDTO[];

  @Input({ required: true })
  nonSelectedTheaters!: MultipleSelectorDTO[];

  @Input({ required: true })
  selectedActors!: ActorAutoCompleteDTO[];

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    title: ['', { validators: [Validators.required] }],
    releaseDate: new FormControl<Date | null>(null),
    trailer: '',

    poster: new FormControl<File | string | null>(null),
  });

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  handleFileSelection(file: File) {
    this.form.controls.poster.setValue(file);
  }

  getErrorMessagesForTitle(): string {
    const field = this.form.controls.title;

    if (field.hasError('required')) {
      return 'The field is required';
    }

    return '';
  }

  saveChanges() {
    if (this.form.invalid) {
      console.log('Форма невалидна:', this.form.value);
      this.form.markAllAsTouched();
      return;
    }

    // Проверяем, что у всех актеров заполнено поле character
    if (this.selectedActors.some(actor => !actor.character || actor.character.trim() === '')) {
      alert('Please fill in the Character field for all selected actors.');
      return;
    }
    const movie = this.form.value as MovieCreationDTO;

    if (movie.releaseDate) {
      movie.releaseDate = moment(movie.releaseDate).toDate();
    }

    if (typeof movie.poster === 'string') {
      movie.poster = undefined;
    }

    const genresIds = this.selectedGenres.map((val) => val.key);
    movie.genresIds = genresIds;

    const theatersIds = this.selectedTheaters.map((val) => val.key);
    movie.theatersIds = theatersIds;

    movie.actors = this.selectedActors;

    this.postForm.emit(movie);
  }
}
