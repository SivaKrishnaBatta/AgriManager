import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoMainComponent } from './po-main.component';

describe('PoMainComponent', () => {
  let component: PoMainComponent;
  let fixture: ComponentFixture<PoMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoMainComponent]
    });
    fixture = TestBed.createComponent(PoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
