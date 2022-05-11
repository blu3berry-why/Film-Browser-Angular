import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/series/series';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-series-search-row',
  templateUrl: './series-search-row.component.html',
  styleUrls: ['./series-search-row.component.css'],
})
export class SeriesSearchRowComponent implements OnInit {
  constructor(private router: Router) {}

  @Input()
  series!: Series;

  ngOnInit(): void {}
  /**
   * Returns a sting with  floor(rating/2) amount of stars
   * @returns A string with stars correlated to the rating
   */
  getRating() {
    let value = '';
    if (this.series.vote_average == undefined) {
      return 'no rating available';
    }
    for (let i = 1; i < 6; i++) {
      if (this.series.vote_average >= i * 2) {
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
    if (this.series.vote_count != undefined) {
      return 'out of ' + this.series.vote_count + ' votes';
    } else {
      return 'no data of the number of votes';
    }
  }
  /**
   * returns the backdrop image or a placeholder
   * @returns url to a picture
   */
  getPreview() {
    if (this.series.backdrop_path != undefined) {
      return environment.prewiew_url + this.series.backdrop_path;
    }
    return 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }
  /**
   * navigates to the series' DetailPage
   */
  onClick() {
    this.router.navigate([`/series/${this.series.id}`]);
  }
}
