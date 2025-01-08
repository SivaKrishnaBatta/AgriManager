import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightRangeFreightComponent } from './weight-range-freight.component';

describe('WeightRangeFreightComponent', () => {
  let component: WeightRangeFreightComponent;
  let fixture: ComponentFixture<WeightRangeFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightRangeFreightComponent]
    });
    fixture = TestBed.createComponent(WeightRangeFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
