import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesPrintComponent } from './quotes-print.component';

describe('QuotesPrintComponent', () => {
  let component: QuotesPrintComponent;
  let fixture: ComponentFixture<QuotesPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesPrintComponent]
    });
    fixture = TestBed.createComponent(QuotesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
