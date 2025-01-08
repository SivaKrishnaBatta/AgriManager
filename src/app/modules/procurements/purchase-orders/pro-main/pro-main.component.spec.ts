import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProMainComponent } from './pro-main.component';

describe('ProMainComponent', () => {
  let component: ProMainComponent;
  let fixture: ComponentFixture<ProMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProMainComponent]
    });
    fixture = TestBed.createComponent(ProMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
