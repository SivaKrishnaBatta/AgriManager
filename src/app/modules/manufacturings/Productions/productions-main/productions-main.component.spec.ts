import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsMainComponent } from './productions-main.component';

describe('ProductionsMainComponent', () => {
  let component: ProductionsMainComponent;
  let fixture: ComponentFixture<ProductionsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionsMainComponent]
    });
    fixture = TestBed.createComponent(ProductionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
