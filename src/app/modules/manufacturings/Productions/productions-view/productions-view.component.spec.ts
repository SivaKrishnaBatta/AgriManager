import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsViewComponent } from './productions-view.component';

describe('ProductionsViewComponent', () => {
  let component: ProductionsViewComponent;
  let fixture: ComponentFixture<ProductionsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionsViewComponent]
    });
    fixture = TestBed.createComponent(ProductionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
