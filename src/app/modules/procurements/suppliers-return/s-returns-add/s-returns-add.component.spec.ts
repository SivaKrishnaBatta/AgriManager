import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnsAddComponent } from './s-returns-add.component';

describe('SReturnsAddComponent', () => {
  let component: SReturnsAddComponent;
  let fixture: ComponentFixture<SReturnsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnsAddComponent]
    });
    fixture = TestBed.createComponent(SReturnsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
