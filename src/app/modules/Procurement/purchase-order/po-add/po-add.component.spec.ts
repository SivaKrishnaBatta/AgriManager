import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoAddComponent } from './po-add.component';

describe('PoAddComponent', () => {
  let component: PoAddComponent;
  let fixture: ComponentFixture<PoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoAddComponent]
    });
    fixture = TestBed.createComponent(PoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
