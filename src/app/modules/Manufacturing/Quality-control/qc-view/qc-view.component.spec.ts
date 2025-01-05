import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcViewComponent } from './qc-view.component';

describe('QcViewComponent', () => {
  let component: QcViewComponent;
  let fixture: ComponentFixture<QcViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcViewComponent]
    });
    fixture = TestBed.createComponent(QcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
