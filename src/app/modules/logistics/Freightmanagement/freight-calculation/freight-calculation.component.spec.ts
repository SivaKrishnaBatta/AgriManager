import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightCalculationComponent } from './freight-calculation.component';

describe('FreightCalculationComponent', () => {
  let component: FreightCalculationComponent;
  let fixture: ComponentFixture<FreightCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightCalculationComponent]
    });
    fixture = TestBed.createComponent(FreightCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
