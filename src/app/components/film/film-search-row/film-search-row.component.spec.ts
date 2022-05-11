import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSearchRowComponent } from './film-search-row.component';

describe('FilmSearchRowComponent', () => {
  let component: FilmSearchRowComponent;
  let fixture: ComponentFixture<FilmSearchRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSearchRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSearchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
