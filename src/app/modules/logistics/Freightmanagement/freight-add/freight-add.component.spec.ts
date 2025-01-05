import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightAddComponent } from './freight-add.component';

describe('FreightAddComponent', () => {
  let component: FreightAddComponent;
  let fixture: ComponentFixture<FreightAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightAddComponent]
    });
    fixture = TestBed.createComponent(FreightAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
