import { inject, Injectable } from '@angular/core';
import { GenreDTO } from './genres.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor() {}

  private http = inject(HttpClient);

  public getAll(): Observable<GenreDTO[]> {
    return this.http.get<GenreDTO[]>('https://localhost:7048/api/genres');
  }
}
