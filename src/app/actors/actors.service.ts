import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActorCreationDTO } from './actors.models';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor() {}

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/actors';

  public create(actor: ActorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.baseURL, formData);
  }

  private buildFormData(actor: ActorCreationDTO): FormData {
    const formData = new FormData();
    formData.append('name', actor.name);
    formData.append('dateOfBirth', actor.dateOfBirth.toISOString().split('T')[0]);
    if (actor.picture instanceof File) {
      formData.append('Picture', actor.picture, actor.picture.name); // Указываем имя файла
    } else if (actor.picture) {
      console.warn('Picture не является файлом:', actor.picture);
    }
    return formData;
  }
}
