import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }
  @Input({ required: true }) maxRating!: number;

  @Input()
  selectedRating = 0;

  clickedRating = 0;

  maxRatingArray: any[] = [];

  handleMouseEnter(index: number) {
    this.selectedRating = index + 1;
  }

  handleMouseLeave() {
    if (this.clickedRating !== 0) {
      this.selectedRating = this.clickedRating;
    } else {
      this.selectedRating = 0;
    }
  }

  handleClick(index: number) {
    this.selectedRating = index + 1;
    this.clickedRating = this.selectedRating;
  }
}
