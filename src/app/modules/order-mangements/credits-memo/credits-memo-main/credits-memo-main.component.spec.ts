import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMemoMainComponent } from './credits-memo-main.component';

describe('CreditsMemoMainComponent', () => {
  let component: CreditsMemoMainComponent;
  let fixture: ComponentFixture<CreditsMemoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsMemoMainComponent]
    });
    fixture = TestBed.createComponent(CreditsMemoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
