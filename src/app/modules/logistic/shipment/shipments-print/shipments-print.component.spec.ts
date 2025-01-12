import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsPrintComponent } from './shipments-print.component';

describe('ShipmentsPrintComponent', () => {
  let component: ShipmentsPrintComponent;
  let fixture: ComponentFixture<ShipmentsPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsPrintComponent]
    });
    fixture = TestBed.createComponent(ShipmentsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
