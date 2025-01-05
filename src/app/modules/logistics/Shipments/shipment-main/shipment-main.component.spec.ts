import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentMainComponent } from './shipment-main.component';

describe('ShipmentMainComponent', () => {
  let component: ShipmentMainComponent;
  let fixture: ComponentFixture<ShipmentMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentMainComponent]
    });
    fixture = TestBed.createComponent(ShipmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
