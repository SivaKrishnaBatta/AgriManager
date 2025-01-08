import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTaxFreightComponent } from './service-tax-freight.component';

describe('ServiceTaxFreightComponent', () => {
  let component: ServiceTaxFreightComponent;
  let fixture: ComponentFixture<ServiceTaxFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTaxFreightComponent]
    });
    fixture = TestBed.createComponent(ServiceTaxFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
