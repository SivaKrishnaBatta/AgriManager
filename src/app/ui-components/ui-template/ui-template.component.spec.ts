import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTemplateComponent } from './ui-template.component';

describe('UiTemplateComponent', () => {
  let component: UiTemplateComponent;
  let fixture: ComponentFixture<UiTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiTemplateComponent]
    });
    fixture = TestBed.createComponent(UiTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
