import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorProfile } from '../models/actor/actorProfile';
import { CreditDetails } from '../models/film/creditDetails';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  constructor(private http: HttpClient) {}

  /**
   *gets actor by id
   * @param id
   * @returns observable
   */
  getById(id: number) {
    return this.http.get<ActorProfile>(environment.url + 'person/' + id);
  }

    /**
   *gets credit by id
   * @param credit_id
   * @returns observable
   */
  getCredit(credit_id: string) {
    return this.http.get<CreditDetails>(
      environment.url + 'credit/' + credit_id
    );
  }
}
