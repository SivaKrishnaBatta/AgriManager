import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsAddComponent } from './shipments-add.component';

describe('ShipmentsAddComponent', () => {
  let component: ShipmentsAddComponent;
  let fixture: ComponentFixture<ShipmentsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsAddComponent]
    });
    fixture = TestBed.createComponent(ShipmentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
