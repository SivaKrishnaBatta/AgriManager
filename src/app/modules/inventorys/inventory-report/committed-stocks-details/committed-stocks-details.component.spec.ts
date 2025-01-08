import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommittedStocksDetailsComponent } from './committed-stocks-details.component';

describe('CommittedStocksDetailsComponent', () => {
  let component: CommittedStocksDetailsComponent;
  let fixture: ComponentFixture<CommittedStocksDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommittedStocksDetailsComponent]
    });
    fixture = TestBed.createComponent(CommittedStocksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
