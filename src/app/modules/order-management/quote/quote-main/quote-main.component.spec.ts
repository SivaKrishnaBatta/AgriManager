import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMainComponent } from './quote-main.component';

describe('QuoteMainComponent', () => {
  let component: QuoteMainComponent;
  let fixture: ComponentFixture<QuoteMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteMainComponent]
    });
    fixture = TestBed.createComponent(QuoteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
