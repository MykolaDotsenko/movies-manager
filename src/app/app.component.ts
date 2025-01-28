import {
  CurrencyPipe,
  DatePipe,
  NgFor,
  NgOptimizedImage,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from "./movies/movies-list/movies-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {




}
