import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightServiceTaxComponent } from './freight-service-tax.component';

describe('FreightServiceTaxComponent', () => {
  let component: FreightServiceTaxComponent;
  let fixture: ComponentFixture<FreightServiceTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightServiceTaxComponent]
    });
    fixture = TestBed.createComponent(FreightServiceTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
