import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorysComponent } from './inventorys.component';

describe('InventorysComponent', () => {
  let component: InventorysComponent;
  let fixture: ComponentFixture<InventorysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorysComponent]
    });
    fixture = TestBed.createComponent(InventorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
