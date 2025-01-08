import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnsViewComponent } from './s-returns-view.component';

describe('SReturnsViewComponent', () => {
  let component: SReturnsViewComponent;
  let fixture: ComponentFixture<SReturnsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnsViewComponent]
    });
    fixture = TestBed.createComponent(SReturnsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
