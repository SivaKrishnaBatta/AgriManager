import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnsItemsComponent } from './s-returns-items.component';

describe('SReturnsItemsComponent', () => {
  let component: SReturnsItemsComponent;
  let fixture: ComponentFixture<SReturnsItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnsItemsComponent]
    });
    fixture = TestBed.createComponent(SReturnsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
