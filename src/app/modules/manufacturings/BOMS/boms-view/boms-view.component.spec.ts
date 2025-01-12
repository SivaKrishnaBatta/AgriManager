import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomsViewComponent } from './boms-view.component';

describe('BomsViewComponent', () => {
  let component: BomsViewComponent;
  let fixture: ComponentFixture<BomsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomsViewComponent]
    });
    fixture = TestBed.createComponent(BomsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
