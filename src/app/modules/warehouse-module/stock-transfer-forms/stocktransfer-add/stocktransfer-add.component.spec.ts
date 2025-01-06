import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferAddComponent } from './stocktransfer-add.component';

describe('StocktransferAddComponent', () => {
  let component: StocktransferAddComponent;
  let fixture: ComponentFixture<StocktransferAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StocktransferAddComponent]
    });
    fixture = TestBed.createComponent(StocktransferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
