import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionsFreightComponent } from './dimensions-freight.component';

describe('DimensionsFreightComponent', () => {
  let component: DimensionsFreightComponent;
  let fixture: ComponentFixture<DimensionsFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DimensionsFreightComponent]
    });
    fixture = TestBed.createComponent(DimensionsFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
