import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDetailsAddComponent } from './warehouse-details-add.component';

describe('WarehouseDetailsAddComponent', () => {
  let component: WarehouseDetailsAddComponent;
  let fixture: ComponentFixture<WarehouseDetailsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseDetailsAddComponent]
    });
    fixture = TestBed.createComponent(WarehouseDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
