import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsAddComponent } from './productions-add.component';

describe('ProductionsAddComponent', () => {
  let component: ProductionsAddComponent;
  let fixture: ComponentFixture<ProductionsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionsAddComponent]
    });
    fixture = TestBed.createComponent(ProductionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
