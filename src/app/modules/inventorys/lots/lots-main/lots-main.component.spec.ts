import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsMainComponent } from './lots-main.component';

describe('LotsMainComponent', () => {
  let component: LotsMainComponent;
  let fixture: ComponentFixture<LotsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotsMainComponent]
    });
    fixture = TestBed.createComponent(LotsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
