import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScmDashboardComponent } from './scm-dashboard.component';

describe('ScmDashboardComponent', () => {
  let component: ScmDashboardComponent;
  let fixture: ComponentFixture<ScmDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScmDashboardComponent]
    });
    fixture = TestBed.createComponent(ScmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
