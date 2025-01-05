import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMainComponent } from './inventory-main.component';

describe('InventoryMainComponent', () => {
  let component: InventoryMainComponent;
  let fixture: ComponentFixture<InventoryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryMainComponent]
    });
    fixture = TestBed.createComponent(InventoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
