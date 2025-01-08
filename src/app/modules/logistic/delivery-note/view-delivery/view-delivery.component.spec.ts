import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeliveryComponent } from './view-delivery.component';

describe('ViewDeliveryComponent', () => {
  let component: ViewDeliveryComponent;
  let fixture: ComponentFixture<ViewDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDeliveryComponent]
    });
    fixture = TestBed.createComponent(ViewDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
