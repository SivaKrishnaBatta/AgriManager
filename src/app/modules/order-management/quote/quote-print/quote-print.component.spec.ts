import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePrintComponent } from './quote-print.component';

describe('QuotePrintComponent', () => {
  let component: QuotePrintComponent;
  let fixture: ComponentFixture<QuotePrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotePrintComponent]
    });
    fixture = TestBed.createComponent(QuotePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
