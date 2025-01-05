import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsMainComponent } from './bookings-main.component';

describe('BookingsMainComponent', () => {
  let component: BookingsMainComponent;
  let fixture: ComponentFixture<BookingsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsMainComponent]
    });
    fixture = TestBed.createComponent(BookingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
