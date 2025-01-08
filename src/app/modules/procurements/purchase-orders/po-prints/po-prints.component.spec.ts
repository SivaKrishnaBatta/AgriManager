import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoPrintsComponent } from './po-prints.component';

describe('PoPrintsComponent', () => {
  let component: PoPrintsComponent;
  let fixture: ComponentFixture<PoPrintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoPrintsComponent]
    });
    fixture = TestBed.createComponent(PoPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
