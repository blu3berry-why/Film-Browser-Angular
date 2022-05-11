import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/models/actor/actor';
import { ActorProfile } from 'src/app/models/actor/actorProfile';
import { ActorService } from 'src/app/services/actor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent implements OnInit {
  id!: number;
  actor!: ActorProfile;
  constructor(private route: ActivatedRoute, private service: ActorService) {}

  pictureurl: string = environment.image_url;

  ngOnInit() {
    console.log(this.route);
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id') ?? '1');
    this.service.getById(this.id).subscribe((res) => (this.actor = res));
  }
  /**
   * returns the backdrop image or a placeholder
   * @returns url to a picture
   */
  Poster() {
    if (this.actor.profile_path != undefined)
      return this.pictureurl + this.actor.profile_path;

    return 'https://www.uhhospitals.org/-/media/Images/Placeholders/Practitioner-Profile-Image-lg.png?la=en&hash=A7EC9572F417BD3CB5A89BFDE239FAF425AA2E38';
  }
}
