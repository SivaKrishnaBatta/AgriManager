import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnsMainComponent } from './s-returns-main.component';

describe('SReturnsMainComponent', () => {
  let component: SReturnsMainComponent;
  let fixture: ComponentFixture<SReturnsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnsMainComponent]
    });
    fixture = TestBed.createComponent(SReturnsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
