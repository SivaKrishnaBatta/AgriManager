import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPrintComponent } from './book-print.component';

describe('BookPrintComponent', () => {
  let component: BookPrintComponent;
  let fixture: ComponentFixture<BookPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookPrintComponent]
    });
    fixture = TestBed.createComponent(BookPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
