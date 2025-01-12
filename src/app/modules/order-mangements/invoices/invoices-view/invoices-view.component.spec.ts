import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesViewComponent } from './invoices-view.component';

describe('InvoicesViewComponent', () => {
  let component: InvoicesViewComponent;
  let fixture: ComponentFixture<InvoicesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesViewComponent]
    });
    fixture = TestBed.createComponent(InvoicesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
