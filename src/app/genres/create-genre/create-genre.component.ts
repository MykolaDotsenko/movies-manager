import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShoudBeUppercase } from '../../shared/functions/validations';

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule,  MatInputModule, RouterLink],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

router = inject(Router)
private formBuilder = inject(FormBuilder);

form = this.formBuilder.group({
  name: ['', {validators: [Validators.required, firstLetterShoudBeUppercase()]}]
});

getErrorMessagesForName(): string {
  let field = this.form.controls.name;
  if (field?.hasError('required')) {
    return 'Name is required';
  }

  if (field?.hasError('firstLetterShoudBeUppercase')) {
    return field.getError('firstLetterShoudBeUppercase').message;
  }
  
  return '';
}


saveChanges() {
// ..save changes
console.log(this.form.value);

this.router.navigate(['/genres'])

}
}
