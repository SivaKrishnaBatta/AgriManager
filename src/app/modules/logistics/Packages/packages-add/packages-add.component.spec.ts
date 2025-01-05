import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesAddComponent } from './packages-add.component';

describe('PackagesAddComponent', () => {
  let component: PackagesAddComponent;
  let fixture: ComponentFixture<PackagesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesAddComponent]
    });
    fixture = TestBed.createComponent(PackagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
