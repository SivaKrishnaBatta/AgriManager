import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoPrintComponent } from './ro-print.component';

describe('RoPrintComponent', () => {
  let component: RoPrintComponent;
  let fixture: ComponentFixture<RoPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoPrintComponent]
    });
    fixture = TestBed.createComponent(RoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
