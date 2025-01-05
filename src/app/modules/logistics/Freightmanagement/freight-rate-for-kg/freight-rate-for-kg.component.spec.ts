import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightRateForKgComponent } from './freight-rate-for-kg.component';

describe('FreightRateForKgComponent', () => {
  let component: FreightRateForKgComponent;
  let fixture: ComponentFixture<FreightRateForKgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightRateForKgComponent]
    });
    fixture = TestBed.createComponent(FreightRateForKgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
