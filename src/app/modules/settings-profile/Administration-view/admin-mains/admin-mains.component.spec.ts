import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainsComponent } from './admin-mains.component';

describe('AdminMainsComponent', () => {
  let component: AdminMainsComponent;
  let fixture: ComponentFixture<AdminMainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMainsComponent]
    });
    fixture = TestBed.createComponent(AdminMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
