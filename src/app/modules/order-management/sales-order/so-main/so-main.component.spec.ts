import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoMainComponent } from './so-main.component';

describe('SoMainComponent', () => {
  let component: SoMainComponent;
  let fixture: ComponentFixture<SoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoMainComponent]
    });
    fixture = TestBed.createComponent(SoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
