import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStockLevelsComponent } from './warehouse-stock-levels.component';

describe('WarehouseStockLevelsComponent', () => {
  let component: WarehouseStockLevelsComponent;
  let fixture: ComponentFixture<WarehouseStockLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseStockLevelsComponent]
    });
    fixture = TestBed.createComponent(WarehouseStockLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
