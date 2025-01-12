import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesMainComponent } from './invoices-main.component';

describe('InvoicesMainComponent', () => {
  let component: InvoicesMainComponent;
  let fixture: ComponentFixture<InvoicesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicesMainComponent]
    });
    fixture = TestBed.createComponent(InvoicesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
