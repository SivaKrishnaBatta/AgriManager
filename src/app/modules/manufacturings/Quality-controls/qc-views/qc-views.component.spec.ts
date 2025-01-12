import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcViewsComponent } from './qc-views.component';

describe('QcViewsComponent', () => {
  let component: QcViewsComponent;
  let fixture: ComponentFixture<QcViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcViewsComponent]
    });
    fixture = TestBed.createComponent(QcViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
