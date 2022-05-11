import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeRowComponent } from './episode-row.component';

describe('EpisodeRowComponent', () => {
  let component: EpisodeRowComponent;
  let fixture: ComponentFixture<EpisodeRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
