import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferMainComponent } from './stocktransfer-main.component';

describe('StocktransferMainComponent', () => {
  let component: StocktransferMainComponent;
  let fixture: ComponentFixture<StocktransferMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocktransferMainComponent]
    });
    fixture = TestBed.createComponent(StocktransferMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
