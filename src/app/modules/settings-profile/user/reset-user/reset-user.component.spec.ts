import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUserComponent } from './reset-user.component';

describe('ResetUserComponent', () => {
  let component: ResetUserComponent;
  let fixture: ComponentFixture<ResetUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetUserComponent]
    });
    fixture = TestBed.createComponent(ResetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
