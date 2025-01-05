import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSummeryComponent } from './inv-summery.component';

describe('InvSummeryComponent', () => {
  let component: InvSummeryComponent;
  let fixture: ComponentFixture<InvSummeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvSummeryComponent]
    });
    fixture = TestBed.createComponent(InvSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
