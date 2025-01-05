import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailAddComponent } from './inv-detail-add.component';

describe('InvDetailAddComponent', () => {
  let component: InvDetailAddComponent;
  let fixture: ComponentFixture<InvDetailAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailAddComponent]
    });
    fixture = TestBed.createComponent(InvDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
