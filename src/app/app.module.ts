import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiKeyInterceptor } from './interceptor/apiKeyInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchFilmComponent } from './components/film/search-film/search-film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmSearchRowComponent } from './components/film/film-search-row/film-search-row.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { SeriesDetailsComponent } from './components/series/series-details/series-details.component';
import { ActorDetailsComponent } from './components/actor/actor-details/actor-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ActorRowComponent } from './components/actor/actor-row/actor-row.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchSeriesComponent } from './components/series/search-series/search-series.component';
import { SeriesSearchRowComponent } from './components/series/series-search-row/series-search-row.component';
import { SeasonRowComponent } from './components/series/season-row/season-row.component';
import { EpisodeRowComponent } from './components/series/episode-row/episode-row.component';
import { TrendingMoviesComponent } from './components/film/trending-movies/trending-movies.component';
import { TrendingSeriesComponent } from './components/series/trending-series/trending-series.component';
import { ErrorHandlerInterceptor } from './interceptor/errorHandlerInterceptor';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilmComponent,
    FilmSearchRowComponent,
    FilmDetailsComponent,
    SeriesDetailsComponent,
    ActorDetailsComponent,
    ActorRowComponent,
    SearchSeriesComponent,
    SeriesSearchRowComponent,
    SeasonRowComponent,
    EpisodeRowComponent,
    TrendingMoviesComponent,
    TrendingSeriesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
