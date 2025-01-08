import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCarrierComponent } from './listing-carrier.component';

describe('ListingCarrierComponent', () => {
  let component: ListingCarrierComponent;
  let fixture: ComponentFixture<ListingCarrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingCarrierComponent]
    });
    fixture = TestBed.createComponent(ListingCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
