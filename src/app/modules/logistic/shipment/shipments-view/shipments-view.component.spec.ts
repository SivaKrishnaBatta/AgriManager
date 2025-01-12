import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsViewComponent } from './shipments-view.component';

describe('ShipmentsViewComponent', () => {
  let component: ShipmentsViewComponent;
  let fixture: ComponentFixture<ShipmentsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentsViewComponent]
    });
    fixture = TestBed.createComponent(ShipmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
