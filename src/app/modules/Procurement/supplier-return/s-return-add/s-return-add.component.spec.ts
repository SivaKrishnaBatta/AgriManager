import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnAddComponent } from './s-return-add.component';

describe('SReturnAddComponent', () => {
  let component: SReturnAddComponent;
  let fixture: ComponentFixture<SReturnAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnAddComponent]
    });
    fixture = TestBed.createComponent(SReturnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
