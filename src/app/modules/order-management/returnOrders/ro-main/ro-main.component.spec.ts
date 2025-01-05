import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoMainComponent } from './ro-main.component';

describe('RoMainComponent', () => {
  let component: RoMainComponent;
  let fixture: ComponentFixture<RoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoMainComponent]
    });
    fixture = TestBed.createComponent(RoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
