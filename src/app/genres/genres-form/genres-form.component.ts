import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { firstLetterShoudBeUppercase } from '../../shared/functions/validations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GenreCreationDTO, GenreDTO } from '../genres.models';

@Component({
  selector: 'app-genres-form',
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
  ],
  templateUrl: './genres-form.component.html',
  styleUrl: './genres-form.component.css',
})
export class GenresFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [
      '',
      {
        validators: [
          Validators.required,
          firstLetterShoudBeUppercase(),
          Validators.maxLength(50),
        ],
      },
    ],
  });

  @Input()
  model?: GenreDTO;

  @Output()
  postForm = new EventEmitter<GenreCreationDTO>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;
    if (field?.hasError('required')) {
      return 'Name is required';
    }

    if (field?.hasError('firstLetterShoudBeUppercase')) {
      return field.getError('firstLetterShoudBeUppercase').message;
    }

    if (field?.hasError('maxlength')) {
      return `The field name must be less than ${
        field.getError('maxlength').requiredLength
      } characters long.`;
    }

    return '';
  }

  saveChanges() {
    // ..save changes

    const genre = this.form.value as GenreCreationDTO;
    this.postForm.emit(genre);
  }
}
