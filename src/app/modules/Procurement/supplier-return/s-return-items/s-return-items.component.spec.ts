import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnItemsComponent } from './s-return-items.component';

describe('SReturnItemsComponent', () => {
  let component: SReturnItemsComponent;
  let fixture: ComponentFixture<SReturnItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnItemsComponent]
    });
    fixture = TestBed.createComponent(SReturnItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
