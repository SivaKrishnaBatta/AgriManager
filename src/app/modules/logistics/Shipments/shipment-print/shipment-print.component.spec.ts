import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentPrintComponent } from './shipment-print.component';

describe('ShipmentPrintComponent', () => {
  let component: ShipmentPrintComponent;
  let fixture: ComponentFixture<ShipmentPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentPrintComponent]
    });
    fixture = TestBed.createComponent(ShipmentPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
