import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomsMainComponent } from './boms-main.component';

describe('BomsMainComponent', () => {
  let component: BomsMainComponent;
  let fixture: ComponentFixture<BomsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomsMainComponent]
    });
    fixture = TestBed.createComponent(BomsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
