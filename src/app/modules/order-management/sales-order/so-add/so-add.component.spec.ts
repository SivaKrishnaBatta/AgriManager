import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoAddComponent } from './so-add.component';

describe('SoAddComponent', () => {
  let component: SoAddComponent;
  let fixture: ComponentFixture<SoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoAddComponent]
    });
    fixture = TestBed.createComponent(SoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
