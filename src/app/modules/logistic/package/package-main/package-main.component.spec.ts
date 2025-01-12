import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageMainComponent } from './package-main.component';

describe('PackageMainComponent', () => {
  let component: PackageMainComponent;
  let fixture: ComponentFixture<PackageMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageMainComponent]
    });
    fixture = TestBed.createComponent(PackageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
