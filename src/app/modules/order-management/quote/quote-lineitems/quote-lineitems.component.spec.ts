import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteLineitemsComponent } from './quote-lineitems.component';

describe('QuoteLineitemsComponent', () => {
  let component: QuoteLineitemsComponent;
  let fixture: ComponentFixture<QuoteLineitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteLineitemsComponent]
    });
    fixture = TestBed.createComponent(QuoteLineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
