import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDeliveryComponent } from './print-delivery.component';

describe('PrintDeliveryComponent', () => {
  let component: PrintDeliveryComponent;
  let fixture: ComponentFixture<PrintDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintDeliveryComponent]
    });
    fixture = TestBed.createComponent(PrintDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
