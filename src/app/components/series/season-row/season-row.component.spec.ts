import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonRowComponent } from './season-row.component';

describe('SeasonRowComponent', () => {
  let component: SeasonRowComponent;
  let fixture: ComponentFixture<SeasonRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
