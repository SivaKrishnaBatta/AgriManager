import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoPrintComponent } from './so-print.component';

describe('SoPrintComponent', () => {
  let component: SoPrintComponent;
  let fixture: ComponentFixture<SoPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoPrintComponent]
    });
    fixture = TestBed.createComponent(SoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
