import { Component, Input, OnInit } from '@angular/core';
import { SeasonDetails } from 'src/app/models/series/seasonDetails';
import { Season } from 'src/app/models/series/seriesDetails';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-season-row',
  templateUrl: './season-row.component.html',
  styleUrls: ['./season-row.component.css'],
})
export class SeasonRowComponent implements OnInit {
  constructor(private service: SeriesService) {}

  @Input()
  season!: Season;

  @Input()
  movie_id!: number;

  seasonDetails!: SeasonDetails;
  ngOnInit(): void {
    this.service
      .getEpisodes(this.movie_id, this.season.season_number)
      .subscribe(res => this.seasonDetails = res);
  }
}
