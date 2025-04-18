import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieDTO } from '../movies.models';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Coordinate } from '../../shared/components/map/Coordinate.module';
import { MapComponent } from '../../shared/components/map/map.component';
import { RatingService } from '../../rating/rating.service';
import Swal from 'sweetalert2';
import { RatingComponent } from "../../shared/components/rating/rating.component";

@Component({
  selector: 'app-movie-details',
  imports: [LoadingComponent, MatChipsModule, RouterLink, MapComponent, RatingComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;
  movie!: MovieDTO;
  trailerURL!: SafeResourceUrl;
  sanitizer = inject(DomSanitizer);

  moviesService = inject(MoviesService);
  ratingServise = inject(RatingService)
  coordinates: Coordinate[] = [];

  ngOnInit(): void {
    this.moviesService.getById(this.id).subscribe((movie) => {
      this.movie = movie;
      movie.releaseDate = new Date(movie.releaseDate);
      this.trailerURL = this.transformYoutubeURLToEmbed(this.movie.trailer);
      if (movie.theaters) {
        this.coordinates = movie.theaters.map((theater) => {
          return {
            latitude: theater.latitude,
            longitude: theater.longitude,
            text: theater.name,
          };
        });
      }
    });
  }

  transformYoutubeURLToEmbed(url: string): SafeResourceUrl | string {
    if (!url) {
      return '';
    }

    let videoId = url.split('v=')[1];
    let ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }


  rate(rate: number) {
    this.ratingServise.rate(this.id, rate).subscribe(() => {
      Swal.fire('Successful', 'Your rate has been received', 'success');
    });
  }
}
