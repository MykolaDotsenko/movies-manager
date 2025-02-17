import { Component } from '@angular/core';
import { ActorsFormComponent } from '../actors-form/actors-form.component';
import { ActorCreationDTO } from '../actors.models';

@Component({
  selector: 'app-create-actors',
  imports: [ActorsFormComponent],
  templateUrl: './create-actors.component.html',
  styleUrl: './create-actors.component.css',
})
export class CreateActorsComponent {
  saveChanges(actor: ActorCreationDTO) {
    console.log('creating actor', actor);
  }
}
