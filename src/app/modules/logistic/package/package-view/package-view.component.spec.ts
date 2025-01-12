import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageViewComponent } from './package-view.component';

describe('PackageViewComponent', () => {
  let component: PackageViewComponent;
  let fixture: ComponentFixture<PackageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageViewComponent]
    });
    fixture = TestBed.createComponent(PackageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
