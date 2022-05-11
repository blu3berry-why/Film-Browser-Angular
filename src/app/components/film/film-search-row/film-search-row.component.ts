import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film/film';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-search-row',
  templateUrl: './film-search-row.component.html',
  styleUrls: ['./film-search-row.component.css'],
})
export class FilmSearchRowComponent implements OnInit {
  constructor(private router: Router) {}

  @Input()
  film!: Film;

  ngOnInit(): void {}

  /**
   * Returns a sting with  floor(rating/2) amount of stars
   * @returns A string with stars correlated to the rating
   */
  getRating() {
    let value = '';
    if (this.film.vote_average == undefined) {
      return 'no rating available';
    }
    for (let i = 1; i < 6; i++) {
      if (this.film.vote_average >= i * 2) {
        value += '⭐';
      }
    }

    return value;
  }
  /**
   * Tells how many reviews are in the average
   * @returns string
   */
  getVoteCount() {
    if (this.film.vote_count != undefined) {
      return 'out of ' + this.film.vote_count + ' votes';
    } else {
      return 'no data of the number of votes';
    }
  }
  /**
   * returns the backdrop image or a placeholder
   * @returns url to a picture
   */
  getPreview() {
    if (this.film.backdrop_path != undefined) {
      return environment.prewiew_url + this.film.backdrop_path;
    }
    return 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }
  /**
   * navigates to the film's DetailPage
   */
  onClick() {
    this.router.navigate([`/film/${this.film.id}`]);
  }
}
