import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailsAddComponent } from './inv-details-add.component';

describe('InvDetailsAddComponent', () => {
  let component: InvDetailsAddComponent;
  let fixture: ComponentFixture<InvDetailsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailsAddComponent]
    });
    fixture = TestBed.createComponent(InvDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
