import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTrackComponent } from './booking-track.component';

describe('BookingTrackComponent', () => {
  let component: BookingTrackComponent;
  let fixture: ComponentFixture<BookingTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingTrackComponent]
    });
    fixture = TestBed.createComponent(BookingTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
