import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightWeightRangeComponent } from './freight-weight-range.component';

describe('FreightWeightRangeComponent', () => {
  let component: FreightWeightRangeComponent;
  let fixture: ComponentFixture<FreightWeightRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightWeightRangeComponent]
    });
    fixture = TestBed.createComponent(FreightWeightRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
