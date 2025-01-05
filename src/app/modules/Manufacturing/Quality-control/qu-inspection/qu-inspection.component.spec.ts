import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuInspectionComponent } from './qu-inspection.component';

describe('QuInspectionComponent', () => {
  let component: QuInspectionComponent;
  let fixture: ComponentFixture<QuInspectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuInspectionComponent]
    });
    fixture = TestBed.createComponent(QuInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
