import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMemoViewComponent } from './credits-memo-view.component';

describe('CreditsMemoViewComponent', () => {
  let component: CreditsMemoViewComponent;
  let fixture: ComponentFixture<CreditsMemoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsMemoViewComponent]
    });
    fixture = TestBed.createComponent(CreditsMemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
