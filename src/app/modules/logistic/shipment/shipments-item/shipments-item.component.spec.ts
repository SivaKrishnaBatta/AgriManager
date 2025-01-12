import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsItemComponent } from './shipments-item.component';

describe('ShipmentsItemComponent', () => {
  let component: ShipmentsItemComponent;
  let fixture: ComponentFixture<ShipmentsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsItemComponent]
    });
    fixture = TestBed.createComponent(ShipmentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
