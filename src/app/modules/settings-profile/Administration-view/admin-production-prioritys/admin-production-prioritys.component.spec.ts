import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductionPrioritysComponent } from './admin-production-prioritys.component';

describe('AdminProductionPrioritysComponent', () => {
  let component: AdminProductionPrioritysComponent;
  let fixture: ComponentFixture<AdminProductionPrioritysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductionPrioritysComponent]
    });
    fixture = TestBed.createComponent(AdminProductionPrioritysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
