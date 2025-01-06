import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockMainComponent } from './add-stock-main.component';

describe('AddStockMainComponent', () => {
  let component: AddStockMainComponent;
  let fixture: ComponentFixture<AddStockMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStockMainComponent]
    });
    fixture = TestBed.createComponent(AddStockMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
