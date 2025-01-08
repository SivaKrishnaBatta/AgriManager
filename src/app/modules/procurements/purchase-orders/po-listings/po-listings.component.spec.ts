import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoListingsComponent } from './po-listings.component';

describe('PoListingsComponent', () => {
  let component: PoListingsComponent;
  let fixture: ComponentFixture<PoListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoListingsComponent]
    });
    fixture = TestBed.createComponent(PoListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
