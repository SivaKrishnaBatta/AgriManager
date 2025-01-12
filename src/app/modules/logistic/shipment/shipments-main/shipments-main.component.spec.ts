import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsMainComponent } from './shipments-main.component';

describe('ShipmentsMainComponent', () => {
  let component: ShipmentsMainComponent;
  let fixture: ComponentFixture<ShipmentsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsMainComponent]
    });
    fixture = TestBed.createComponent(ShipmentsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
