import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationFreightComponent } from './calculation-freight.component';

describe('CalculationFreightComponent', () => {
  let component: CalculationFreightComponent;
  let fixture: ComponentFixture<CalculationFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculationFreightComponent]
    });
    fixture = TestBed.createComponent(CalculationFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
