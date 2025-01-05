import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoAddComponent } from './ro-add.component';

describe('RoAddComponent', () => {
  let component: RoAddComponent;
  let fixture: ComponentFixture<RoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoAddComponent]
    });
    fixture = TestBed.createComponent(RoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
