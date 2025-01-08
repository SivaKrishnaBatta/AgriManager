import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoAddsComponent } from './po-adds.component';

describe('PoAddsComponent', () => {
  let component: PoAddsComponent;
  let fixture: ComponentFixture<PoAddsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoAddsComponent]
    });
    fixture = TestBed.createComponent(PoAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
