import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersAddComponent } from './suppliers-add.component';

describe('SuppliersAddComponent', () => {
  let component: SuppliersAddComponent;
  let fixture: ComponentFixture<SuppliersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersAddComponent]
    });
    fixture = TestBed.createComponent(SuppliersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
