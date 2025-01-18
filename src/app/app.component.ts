import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies = [{
    title: 'The Avengers',
    releaseDate: new Date(),
    price: 19.99,
  },
{
  title: 'The Spider-Man',
  releaseDate: new Date('2016-05-03'),
  price: 29.99,
}
]

  duplicateNumber(value: number) {
    return value * 2;
  }
}
