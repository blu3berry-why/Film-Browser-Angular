import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDetails } from 'src/app/models/series/seriesDetails';
import { SeriesService } from 'src/app/services/series.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css'],
})
export class SeriesDetailsComponent implements OnInit {
  id!: number;
  series!: SeriesDetails;
  constructor(private route: ActivatedRoute, private service: SeriesService) {}

  pictureurl: string = environment.image_url;
  // credits!: Credits;

  ngOnInit() {
    console.log(this.route);
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? '1');
    this.service.getById(this.id).subscribe((res) => (this.series = res));
    /*
    this.service.getCredits(this.id).subscribe((res) => {
      console.log('asdasdsad');
      this.credits = res;
      console.log(res);
    });*/
  }

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
}
