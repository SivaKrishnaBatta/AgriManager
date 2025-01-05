import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotMainComponent } from './lot-main.component';

describe('LotMainComponent', () => {
  let component: LotMainComponent;
  let fixture: ComponentFixture<LotMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotMainComponent]
    });
    fixture = TestBed.createComponent(LotMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
