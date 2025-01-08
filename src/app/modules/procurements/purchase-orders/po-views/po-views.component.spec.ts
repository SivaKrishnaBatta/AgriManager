import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoViewsComponent } from './po-views.component';

describe('PoViewsComponent', () => {
  let component: PoViewsComponent;
  let fixture: ComponentFixture<PoViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoViewsComponent]
    });
    fixture = TestBed.createComponent(PoViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
