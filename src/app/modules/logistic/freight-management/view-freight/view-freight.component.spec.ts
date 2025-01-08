import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFreightComponent } from './view-freight.component';

describe('ViewFreightComponent', () => {
  let component: ViewFreightComponent;
  let fixture: ComponentFixture<ViewFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFreightComponent]
    });
    fixture = TestBed.createComponent(ViewFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
