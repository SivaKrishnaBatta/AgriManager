import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoItemsComponent } from './ro-items.component';

describe('RoItemsComponent', () => {
  let component: RoItemsComponent;
  let fixture: ComponentFixture<RoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoItemsComponent]
    });
    fixture = TestBed.createComponent(RoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
