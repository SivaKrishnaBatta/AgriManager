import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcAddsComponent } from './qc-adds.component';

describe('QcAddsComponent', () => {
  let component: QcAddsComponent;
  let fixture: ComponentFixture<QcAddsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcAddsComponent]
    });
    fixture = TestBed.createComponent(QcAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
