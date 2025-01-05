import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePrintComponent } from './package-print.component';

describe('PackagePrintComponent', () => {
  let component: PackagePrintComponent;
  let fixture: ComponentFixture<PackagePrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagePrintComponent]
    });
    fixture = TestBed.createComponent(PackagePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
