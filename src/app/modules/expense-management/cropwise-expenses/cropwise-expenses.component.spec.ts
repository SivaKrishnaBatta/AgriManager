import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropwiseExpensesComponent } from './cropwise-expenses.component';

describe('CropwiseExpensesComponent', () => {
  let component: CropwiseExpensesComponent;
  let fixture: ComponentFixture<CropwiseExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropwiseExpensesComponent]
    });
    fixture = TestBed.createComponent(CropwiseExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
