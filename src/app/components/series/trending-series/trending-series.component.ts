import { Component, OnInit } from '@angular/core';
import { SeriesSearchResult } from 'src/app/models/series/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-trending-series',
  templateUrl: './trending-series.component.html',
  styleUrls: ['./trending-series.component.css']
})
export class TrendingSeriesComponent implements OnInit {

  constructor(private service: SeriesService) { }

  searchResult!: SeriesSearchResult

  ngOnInit(): void {
      this.service.getTrending().subscribe(res=> this.searchResult = res)
  }

}
