import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor/actor';
import { CreditDetails } from 'src/app/models/film/creditDetails';
import { ActorService } from 'src/app/services/actor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-row',
  templateUrl: './actor-row.component.html',
  styleUrls: ['./actor-row.component.css'],
})
export class ActorRowComponent implements OnInit {
  constructor(private service: ActorService, private router: Router) {}

  @Input()
  actor!: Actor;

  creditDetais!: CreditDetails;

  ngOnInit(): void {
    this.service
      .getCredit(this.actor.credit_id)
      .subscribe((res) => (this.creditDetais = res));
  }

  /**
   * navigates to the Actor's Detail page
   */
  onClick() {
    this.router.navigate([`/actor/${this.actor.id}`]);
  }
}
