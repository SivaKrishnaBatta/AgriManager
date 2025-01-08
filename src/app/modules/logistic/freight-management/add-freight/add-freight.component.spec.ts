import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreightComponent } from './add-freight.component';

describe('AddFreightComponent', () => {
  let component: AddFreightComponent;
  let fixture: ComponentFixture<AddFreightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFreightComponent]
    });
    fixture = TestBed.createComponent(AddFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
