import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesItemsComponent } from './invoices-items.component';

describe('InvoicesItemsComponent', () => {
  let component: InvoicesItemsComponent;
  let fixture: ComponentFixture<InvoicesItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesItemsComponent]
    });
    fixture = TestBed.createComponent(InvoicesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
