import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoViewComponent } from './so-view.component';

describe('SoViewComponent', () => {
  let component: SoViewComponent;
  let fixture: ComponentFixture<SoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoViewComponent]
    });
    fixture = TestBed.createComponent(SoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
