import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

@Input({ required: true })

  movies?: any[];

  
}
