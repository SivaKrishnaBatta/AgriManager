import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDeatilsComponent } from './field-deatils.component';

describe('FieldDeatilsComponent', () => {
  let component: FieldDeatilsComponent;
  let fixture: ComponentFixture<FieldDeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldDeatilsComponent]
    });
    fixture = TestBed.createComponent(FieldDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
