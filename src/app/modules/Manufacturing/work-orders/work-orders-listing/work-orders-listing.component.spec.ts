import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersListingComponent } from './work-orders-listing.component';

describe('WorkOrdersListingComponent', () => {
  let component: WorkOrdersListingComponent;
  let fixture: ComponentFixture<WorkOrdersListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkOrdersListingComponent]
    });
    fixture = TestBed.createComponent(WorkOrdersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
