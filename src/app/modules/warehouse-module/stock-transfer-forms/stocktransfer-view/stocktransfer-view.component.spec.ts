import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferViewComponent } from './stocktransfer-view.component';

describe('StocktransferViewComponent', () => {
  let component: StocktransferViewComponent;
  let fixture: ComponentFixture<StocktransferViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocktransferViewComponent]
    });
    fixture = TestBed.createComponent(StocktransferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
