import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropwiseIncomeComponent } from './cropwise-income.component';

describe('CropwiseIncomeComponent', () => {
  let component: CropwiseIncomeComponent;
  let fixture: ComponentFixture<CropwiseIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropwiseIncomeComponent]
    });
    fixture = TestBed.createComponent(CropwiseIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
