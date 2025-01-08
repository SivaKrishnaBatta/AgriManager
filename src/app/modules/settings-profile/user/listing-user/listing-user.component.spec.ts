import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingUserComponent } from './listing-user.component';

describe('ListingUserComponent', () => {
  let component: ListingUserComponent;
  let fixture: ComponentFixture<ListingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingUserComponent]
    });
    fixture = TestBed.createComponent(ListingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
