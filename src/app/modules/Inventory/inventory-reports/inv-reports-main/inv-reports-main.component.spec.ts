import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvReportsMainComponent } from './inv-reports-main.component';

describe('InvReportsMainComponent', () => {
  let component: InvReportsMainComponent;
  let fixture: ComponentFixture<InvReportsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvReportsMainComponent]
    });
    fixture = TestBed.createComponent(InvReportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
