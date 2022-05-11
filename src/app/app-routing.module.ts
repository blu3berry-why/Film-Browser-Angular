import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailsComponent } from './components/actor/actor-details/actor-details.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { FilmSearchRowComponent } from './components/film/film-search-row/film-search-row.component';
import { SearchFilmComponent } from './components/film/search-film/search-film.component';
import { TrendingMoviesComponent } from './components/film/trending-movies/trending-movies.component';
import { SearchSeriesComponent } from './components/series/search-series/search-series.component';
import { SeriesDetailsComponent } from './components/series/series-details/series-details.component';
import { TrendingSeriesComponent } from './components/series/trending-series/trending-series.component';

const routes: Routes = [
  { path: 'search/movies', component: SearchFilmComponent },
  { path: 'search/series', component: SearchSeriesComponent },
  { path: 'actor', component: ActorDetailsComponent },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: 'series/:id', component: SeriesDetailsComponent },
  { path: 'actor/:id', component: ActorDetailsComponent },
  { path: '', component: TrendingMoviesComponent },
  { path: 'recommended/series', component: TrendingSeriesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
