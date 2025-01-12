import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesItemComponent } from './packages-item.component';

describe('PackagesItemComponent', () => {
  let component: PackagesItemComponent;
  let fixture: ComponentFixture<PackagesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesItemComponent]
    });
    fixture = TestBed.createComponent(PackagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
