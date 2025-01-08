import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnsPrintComponent } from './s-returns-print.component';

describe('SReturnsPrintComponent', () => {
  let component: SReturnsPrintComponent;
  let fixture: ComponentFixture<SReturnsPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnsPrintComponent]
    });
    fixture = TestBed.createComponent(SReturnsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
