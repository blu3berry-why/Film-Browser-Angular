import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/models/film/credits';
import { Film } from 'src/app/models/film/film';
import { FilmDetails } from 'src/app/models/film/filmDetails';
import { FilmServiceService } from 'src/app/services/film-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  id!: number;
  film!: FilmDetails;
  constructor(
    private route: ActivatedRoute,
    private service: FilmServiceService
  ) {}

  pictureurl: string = environment.image_url;
  credits!: Credits;

  ngOnInit() {
    console.log(this.route);
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? '1');
    this.service.getById(this.id).subscribe((res) => (this.film = res));

    this.service.getCredits(this.id).subscribe((res) => {
      console.log('asdasdsad');
      this.credits = res;
      console.log(res);
    });
  }

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
}
