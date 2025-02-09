import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  name: ['', {validators: [Validators.required]}]
});

getErrorMessagesForName(): string {
  let field = this.form.controls.name;
  if (field?.hasError('required')) {
    return 'Name is required';
  }
  return '';
}


saveChanges() {
// ..save changes
console.log(this.form.value);

this.router.navigate(['/genres'])

}
}
