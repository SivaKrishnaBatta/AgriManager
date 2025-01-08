import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishmentsMainComponent } from './replenishments-main.component';

describe('ReplenishmentsMainComponent', () => {
  let component: ReplenishmentsMainComponent;
  let fixture: ComponentFixture<ReplenishmentsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplenishmentsMainComponent]
    });
    fixture = TestBed.createComponent(ReplenishmentsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
