import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarrierComponent } from './main-carrier.component';

describe('MainCarrierComponent', () => {
  let component: MainCarrierComponent;
  let fixture: ComponentFixture<MainCarrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCarrierComponent]
    });
    fixture = TestBed.createComponent(MainCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
