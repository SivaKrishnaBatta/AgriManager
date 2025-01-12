import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPrintComponent } from './sales-print.component';

describe('SalesPrintComponent', () => {
  let component: SalesPrintComponent;
  let fixture: ComponentFixture<SalesPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesPrintComponent]
    });
    fixture = TestBed.createComponent(SalesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
