import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnitMeasureComponent } from './admin-unit-measure.component';

describe('AdminUnitMeasureComponent', () => {
  let component: AdminUnitMeasureComponent;
  let fixture: ComponentFixture<AdminUnitMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUnitMeasureComponent]
    });
    fixture = TestBed.createComponent(AdminUnitMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
