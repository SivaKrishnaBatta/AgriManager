import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesLineitemsComponent } from './quotes-lineitems.component';

describe('QuotesLineitemsComponent', () => {
  let component: QuotesLineitemsComponent;
  let fixture: ComponentFixture<QuotesLineitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesLineitemsComponent]
    });
    fixture = TestBed.createComponent(QuotesLineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
