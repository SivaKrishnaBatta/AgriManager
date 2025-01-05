import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingMainComponent } from './manufacturing-main.component';

describe('ManufacturingMainComponent', () => {
  let component: ManufacturingMainComponent;
  let fixture: ComponentFixture<ManufacturingMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturingMainComponent]
    });
    fixture = TestBed.createComponent(ManufacturingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
