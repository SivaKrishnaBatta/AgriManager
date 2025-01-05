import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReturnViewComponent } from './s-return-view.component';

describe('SReturnViewComponent', () => {
  let component: SReturnViewComponent;
  let fixture: ComponentFixture<SReturnViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SReturnViewComponent]
    });
    fixture = TestBed.createComponent(SReturnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
