import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliverComponent } from './add-deliver.component';

describe('AddDeliverComponent', () => {
  let component: AddDeliverComponent;
  let fixture: ComponentFixture<AddDeliverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDeliverComponent]
    });
    fixture = TestBed.createComponent(AddDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
