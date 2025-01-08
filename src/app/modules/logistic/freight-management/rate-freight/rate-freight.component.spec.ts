import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateFreightComponent } from './rate-freight.component';

describe('RateFreightComponent', () => {
  let component: RateFreightComponent;
  let fixture: ComponentFixture<RateFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateFreightComponent]
    });
    fixture = TestBed.createComponent(RateFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
