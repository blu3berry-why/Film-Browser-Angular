import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeasonDetails } from '../models/series/seasonDetails';
import { SeriesSearchResult } from '../models/series/series';
import { SeriesDetails } from '../models/series/seriesDetails';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}
  /**
   * gets series by name
   * @param searchString query
   * @returns observable
   */
  getByName(searchString: string) {
    const params = new HttpParams().set('query', searchString);
    return this.http.get<SeriesSearchResult>(environment.url + 'search/tv', {
      params: params,
    });
  }
  /**
   * gets the xth batch in the list
   * @param searchString query
   * @param page the current page
   * @returns observable
   */
  getByNameAndPage(searchString: string, page: number) {
    const params = new HttpParams()
      .set('query', searchString)
      .set('page', page);
    return this.http.get<SeriesSearchResult>(environment.url + 'search/tv', {
      params: params,
    });
  }
  /**
   * gets details by id
   * @param id series id
   * @returns
   */
  getById(id: number) {
    return this.http.get<SeriesDetails>(environment.url + 'tv/' + id);
  }
  /**
   * get episodes of a season
   * @param id series id
   * @param season_number season
   * @returns observable
   */
  getEpisodes(id: number, season_number: number) {
    return this.http.get<SeasonDetails>(
      environment.url + 'tv/' + id + '/season/' + season_number
    );
  }
  /**
   * gets trending series
   * @returns observable
   */
  getTrending() {
    return this.http.get<SeriesSearchResult>(
      environment.url + 'trending/tv/week'
    );
  }
}
