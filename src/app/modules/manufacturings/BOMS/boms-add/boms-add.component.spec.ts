import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomsAddComponent } from './boms-add.component';

describe('BomsAddComponent', () => {
  let component: BomsAddComponent;
  let fixture: ComponentFixture<BomsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomsAddComponent]
    });
    fixture = TestBed.createComponent(BomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
