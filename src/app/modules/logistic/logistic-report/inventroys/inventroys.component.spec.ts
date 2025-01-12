import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventroysComponent } from './inventroys.component';

describe('InventroysComponent', () => {
  let component: InventroysComponent;
  let fixture: ComponentFixture<InventroysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventroysComponent]
    });
    fixture = TestBed.createComponent(InventroysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
