import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingsComponent } from './manufacturings.component';

describe('ManufacturingsComponent', () => {
  let component: ManufacturingsComponent;
  let fixture: ComponentFixture<ManufacturingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufacturingsComponent]
    });
    fixture = TestBed.createComponent(ManufacturingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
