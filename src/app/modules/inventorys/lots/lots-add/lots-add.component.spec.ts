import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsAddComponent } from './lots-add.component';

describe('LotsAddComponent', () => {
  let component: LotsAddComponent;
  let fixture: ComponentFixture<LotsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotsAddComponent]
    });
    fixture = TestBed.createComponent(LotsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
