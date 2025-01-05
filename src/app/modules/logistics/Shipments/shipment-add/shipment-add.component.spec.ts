import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentAddComponent } from './shipment-add.component';

describe('ShipmentAddComponent', () => {
  let component: ShipmentAddComponent;
  let fixture: ComponentFixture<ShipmentAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentAddComponent]
    });
    fixture = TestBed.createComponent(ShipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
