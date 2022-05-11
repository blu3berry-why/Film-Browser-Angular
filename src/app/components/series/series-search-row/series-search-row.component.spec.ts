import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSearchRowComponent } from './series-search-row.component';

describe('SeriesSearchRowComponent', () => {
  let component: SeriesSearchRowComponent;
  let fixture: ComponentFixture<SeriesSearchRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesSearchRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesSearchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
