import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GenreDTO } from '../../genres/genres.models';

@Component({
  selector: 'app-movies-search',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.css',
})
export class MoviesSearchComponent {

private formBuilder = inject(FormBuilder);

form = this.formBuilder.group({
  title: '',
  genreId: 0,
 upcomingReleases: false,
 inTheaters: false,
})


genres: GenreDTO[] = [
  { id: 1, name: 'Drama' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Comedy' },
]

clear(){
  this.form.patchValue({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  })
}

}
