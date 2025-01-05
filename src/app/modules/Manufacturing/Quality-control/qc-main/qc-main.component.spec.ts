import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMainComponent } from './qc-main.component';

describe('QcMainComponent', () => {
  let component: QcMainComponent;
  let fixture: ComponentFixture<QcMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMainComponent]
    });
    fixture = TestBed.createComponent(QcMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
