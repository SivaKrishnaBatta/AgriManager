import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommittedStockDetailsComponent } from './committed-stock-details.component';

describe('CommittedStockDetailsComponent', () => {
  let component: CommittedStockDetailsComponent;
  let fixture: ComponentFixture<CommittedStockDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommittedStockDetailsComponent]
    });
    fixture = TestBed.createComponent(CommittedStockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
