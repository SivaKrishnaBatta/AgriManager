import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactTypesComponent } from './admin-contact-types.component';

describe('AdminContactTypesComponent', () => {
  let component: AdminContactTypesComponent;
  let fixture: ComponentFixture<AdminContactTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminContactTypesComponent]
    });
    fixture = TestBed.createComponent(AdminContactTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
