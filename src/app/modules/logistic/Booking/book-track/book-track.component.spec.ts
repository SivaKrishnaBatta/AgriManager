import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTrackComponent } from './book-track.component';

describe('BookTrackComponent', () => {
  let component: BookTrackComponent;
  let fixture: ComponentFixture<BookTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTrackComponent]
    });
    fixture = TestBed.createComponent(BookTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
