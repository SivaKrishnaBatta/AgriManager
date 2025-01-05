import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaxsComponent } from './admin-taxs.component';

describe('AdminTaxsComponent', () => {
  let component: AdminTaxsComponent;
  let fixture: ComponentFixture<AdminTaxsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTaxsComponent]
    });
    fixture = TestBed.createComponent(AdminTaxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
