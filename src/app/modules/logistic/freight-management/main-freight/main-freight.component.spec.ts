import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFreightComponent } from './main-freight.component';

describe('MainFreightComponent', () => {
  let component: MainFreightComponent;
  let fixture: ComponentFixture<MainFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFreightComponent]
    });
    fixture = TestBed.createComponent(MainFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
