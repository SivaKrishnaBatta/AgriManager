import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDetailsMainComponent } from './warehouse-details-main.component';

describe('WarehouseDetailsMainComponent', () => {
  let component: WarehouseDetailsMainComponent;
  let fixture: ComponentFixture<WarehouseDetailsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseDetailsMainComponent]
    });
    fixture = TestBed.createComponent(WarehouseDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
