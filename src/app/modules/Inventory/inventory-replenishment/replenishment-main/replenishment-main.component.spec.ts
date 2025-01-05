import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishmentMainComponent } from './replenishment-main.component';

describe('ReplenishmentMainComponent', () => {
  let component: ReplenishmentMainComponent;
  let fixture: ComponentFixture<ReplenishmentMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplenishmentMainComponent]
    });
    fixture = TestBed.createComponent(ReplenishmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
