import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightDimensionsComponent } from './freight-dimensions.component';

describe('FreightDimensionsComponent', () => {
  let component: FreightDimensionsComponent;
  let fixture: ComponentFixture<FreightDimensionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightDimensionsComponent]
    });
    fixture = TestBed.createComponent(FreightDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
