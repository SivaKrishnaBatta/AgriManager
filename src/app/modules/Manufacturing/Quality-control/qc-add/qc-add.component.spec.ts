import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcAddComponent } from './qc-add.component';

describe('QcAddComponent', () => {
  let component: QcAddComponent;
  let fixture: ComponentFixture<QcAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcAddComponent]
    });
    fixture = TestBed.createComponent(QcAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
