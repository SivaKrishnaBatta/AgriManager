import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementMainComponent } from './procurement-main.component';

describe('ProcurementMainComponent', () => {
  let component: ProcurementMainComponent;
  let fixture: ComponentFixture<ProcurementMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcurementMainComponent]
    });
    fixture = TestBed.createComponent(ProcurementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
