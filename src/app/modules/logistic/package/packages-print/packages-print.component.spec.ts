import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesPrintComponent } from './packages-print.component';

describe('PackagesPrintComponent', () => {
  let component: PackagesPrintComponent;
  let fixture: ComponentFixture<PackagesPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesPrintComponent]
    });
    fixture = TestBed.createComponent(PackagesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
