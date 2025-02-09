import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, ReactiveFormsModule],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

router = inject(Router)
private formBuilder = inject(FormBuilder);

form = this.formBuilder.group({
  name: ['']
});

saveChanges() {
// ..save changes

this.router.navigate(['/genres'])

}
}
