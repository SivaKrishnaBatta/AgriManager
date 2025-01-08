import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFreightComponent } from './listing-freight.component';

describe('ListingFreightComponent', () => {
  let component: ListingFreightComponent;
  let fixture: ComponentFixture<ListingFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingFreightComponent]
    });
    fixture = TestBed.createComponent(ListingFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
