import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreationDTO, ActorDTO } from '../actors.models';
import { ActorsFormComponent } from "../actors-form/actors-form.component";

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsFormComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css',
})
export class EditActorComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  model: ActorDTO = {
    id: 1,
    name: 'Tom Cruise',
    dateOfBirth: new Date('1948-07-03'), picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/800px-Tom_Cruise_by_Gage_Skidmore_2.jpg',
  };


  saveChanges(actor: ActorCreationDTO) {
    console.log('editing the actor', actor);
  }
}
