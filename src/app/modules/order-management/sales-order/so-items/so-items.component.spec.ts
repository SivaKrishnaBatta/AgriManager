import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoItemsComponent } from './so-items.component';

describe('SoItemsComponent', () => {
  let component: SoItemsComponent;
  let fixture: ComponentFixture<SoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoItemsComponent]
    });
    fixture = TestBed.createComponent(SoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
