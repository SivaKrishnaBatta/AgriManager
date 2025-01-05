import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnMainComponent } from './s-return-main.component';

describe('SReturnMainComponent', () => {
  let component: SReturnMainComponent;
  let fixture: ComponentFixture<SReturnMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnMainComponent]
    });
    fixture = TestBed.createComponent(SReturnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
