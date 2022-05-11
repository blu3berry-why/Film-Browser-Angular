import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/film/searchResults';
import { FilmServiceService } from 'src/app/services/film-service.service';


@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {

  constructor(private service: FilmServiceService) { }

  searchResult!: SearchResult

  ngOnInit(): void {
      this.service.getTrending().subscribe(res=> this.searchResult = res)
  }

}
