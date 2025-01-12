import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMainsComponent } from './qc-mains.component';

describe('QcMainsComponent', () => {
  let component: QcMainsComponent;
  let fixture: ComponentFixture<QcMainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QcMainsComponent]
    });
    fixture = TestBed.createComponent(QcMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
