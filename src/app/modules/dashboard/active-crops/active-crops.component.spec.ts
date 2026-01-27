import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCropsComponent } from './active-crops.component';

describe('ActiveCropsComponent', () => {
  let component: ActiveCropsComponent;
  let fixture: ComponentFixture<ActiveCropsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveCropsComponent]
    });
    fixture = TestBed.createComponent(ActiveCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
