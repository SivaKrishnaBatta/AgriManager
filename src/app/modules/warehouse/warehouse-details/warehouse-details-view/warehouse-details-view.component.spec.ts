import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDetailsViewComponent } from './warehouse-details-view.component';

describe('WarehouseDetailsViewComponent', () => {
  let component: WarehouseDetailsViewComponent;
  let fixture: ComponentFixture<WarehouseDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseDetailsViewComponent]
    });
    fixture = TestBed.createComponent(WarehouseDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
