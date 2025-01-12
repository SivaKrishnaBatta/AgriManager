import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesItemsComponent } from './sales-items.component';

describe('SalesItemsComponent', () => {
  let component: SalesItemsComponent;
  let fixture: ComponentFixture<SalesItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesItemsComponent]
    });
    fixture = TestBed.createComponent(SalesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
