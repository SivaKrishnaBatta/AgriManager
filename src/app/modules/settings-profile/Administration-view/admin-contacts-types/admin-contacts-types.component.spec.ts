import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactsTypesComponent } from './admin-contacts-types.component';

describe('AdminContactsTypesComponent', () => {
  let component: AdminContactsTypesComponent;
  let fixture: ComponentFixture<AdminContactsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminContactsTypesComponent]
    });
    fixture = TestBed.createComponent(AdminContactsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
