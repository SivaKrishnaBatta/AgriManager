import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingItemsComponent } from './booking-items.component';

describe('BookingItemsComponent', () => {
  let component: BookingItemsComponent;
  let fixture: ComponentFixture<BookingItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingItemsComponent]
    });
    fixture = TestBed.createComponent(BookingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
