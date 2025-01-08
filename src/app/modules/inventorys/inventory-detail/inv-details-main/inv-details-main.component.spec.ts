import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailsMainComponent } from './inv-details-main.component';

describe('InvDetailsMainComponent', () => {
  let component: InvDetailsMainComponent;
  let fixture: ComponentFixture<InvDetailsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailsMainComponent]
    });
    fixture = TestBed.createComponent(InvDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
