import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/series/seasonDetails';

@Component({
  selector: 'app-episode-row',
  templateUrl: './episode-row.component.html',
  styleUrls: ['./episode-row.component.css'],
})
export class EpisodeRowComponent implements OnInit {
  constructor() {}

  @Input()
  episode!: Episode;

  ngOnInit(): void {}
}
