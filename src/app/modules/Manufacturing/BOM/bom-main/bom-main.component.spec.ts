import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomMainComponent } from './bom-main.component';

describe('BomMainComponent', () => {
  let component: BomMainComponent;
  let fixture: ComponentFixture<BomMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomMainComponent]
    });
    fixture = TestBed.createComponent(BomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
