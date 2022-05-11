import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credits } from '../models/film/credits';
import { FilmDetails } from '../models/film/filmDetails';
import { SearchResult } from '../models/film/searchResults';

@Injectable({
  providedIn: 'root',
})
export class FilmServiceService {
  constructor(private http: HttpClient) {}

  /**
   * searches for a movie in the name
   * @param searchString query
   * @returns observable
   */
  getByName(searchString: string) {
    const params = new HttpParams().set('query', searchString);
    return this.http.get<SearchResult>(environment.url + 'search/movie', {
      params: params,
    });
  }

  /**
   * searches for a movie in the name
   * @param searchString query
   * @param page current page
   * @returns observable
   */
  getByNameAndPage(searchString: string, page: number) {
    const params = new HttpParams()
      .set('query', searchString)
      .set('page', page);
    return this.http.get<SearchResult>(environment.url + 'search/movie', {
      params: params,
    });
  }
/**
 * gets details by id
 * @param id film id
 * @returns observable
 */
  getById(id: number) {
    return this.http.get<FilmDetails>(environment.url + 'movie/' + id);
  }
/**
 * gets credits of the film
 * @param id film id
 * @returns observable
 */
  getCredits(id: number) {
    console.log(environment.url + 'credit/' + id);
    return this.http.get<Credits>(environment.url + 'movie/' + id + '/credits');
  }
/**
 * gets the trending movies
 * @returns observable
 */
  getTrending() {
    return this.http.get<SearchResult>(environment.url + 'trending/movie/week');
  }
}
