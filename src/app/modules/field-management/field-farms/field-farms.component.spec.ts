import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFarmsComponent } from './field-farms.component';

describe('FieldFarmsComponent', () => {
  let component: FieldFarmsComponent;
  let fixture: ComponentFixture<FieldFarmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldFarmsComponent]
    });
    fixture = TestBed.createComponent(FieldFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
