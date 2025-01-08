import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSummaryComponent } from './inv-summary.component';

describe('InvSummaryComponent', () => {
  let component: InvSummaryComponent;
  let fixture: ComponentFixture<InvSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvSummaryComponent]
    });
    fixture = TestBed.createComponent(InvSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
