import { Injectable } from '@angular/core';
import { GenreDTO } from './genres.models';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor() {}

  public getAll(): GenreDTO[] {
    return [
      {
        id: 1,
        name: 'Drama',
      },
    ];
  }
}
