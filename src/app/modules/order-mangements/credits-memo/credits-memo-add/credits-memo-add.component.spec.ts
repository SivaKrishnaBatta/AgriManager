import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMemoAddComponent } from './credits-memo-add.component';

describe('CreditsMemoAddComponent', () => {
  let component: CreditsMemoAddComponent;
  let fixture: ComponentFixture<CreditsMemoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsMemoAddComponent]
    });
    fixture = TestBed.createComponent(CreditsMemoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
