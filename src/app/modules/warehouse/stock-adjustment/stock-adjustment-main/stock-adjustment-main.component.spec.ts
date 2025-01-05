import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAdjustmentMainComponent } from './stock-adjustment-main.component';

describe('StockAdjustmentMainComponent', () => {
  let component: StockAdjustmentMainComponent;
  let fixture: ComponentFixture<StockAdjustmentMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockAdjustmentMainComponent]
    });
    fixture = TestBed.createComponent(StockAdjustmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
