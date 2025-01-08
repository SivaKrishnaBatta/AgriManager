import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersMainComponent } from './suppliers-main.component';

describe('SuppliersMainComponent', () => {
  let component: SuppliersMainComponent;
  let fixture: ComponentFixture<SuppliersMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliersMainComponent]
    });
    fixture = TestBed.createComponent(SuppliersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
