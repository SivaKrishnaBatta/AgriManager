import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightMainComponent } from './freight-main.component';

describe('FreightMainComponent', () => {
  let component: FreightMainComponent;
  let fixture: ComponentFixture<FreightMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightMainComponent]
    });
    fixture = TestBed.createComponent(FreightMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
