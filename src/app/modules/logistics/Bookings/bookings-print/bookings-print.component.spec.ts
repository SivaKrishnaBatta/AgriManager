import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsPrintComponent } from './bookings-print.component';

describe('BookingsPrintComponent', () => {
  let component: BookingsPrintComponent;
  let fixture: ComponentFixture<BookingsPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsPrintComponent]
    });
    fixture = TestBed.createComponent(BookingsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
