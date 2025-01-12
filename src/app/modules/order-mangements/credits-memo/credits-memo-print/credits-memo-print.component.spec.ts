import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMemoPrintComponent } from './credits-memo-print.component';

describe('CreditsMemoPrintComponent', () => {
  let component: CreditsMemoPrintComponent;
  let fixture: ComponentFixture<CreditsMemoPrintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsMemoPrintComponent]
    });
    fixture = TestBed.createComponent(CreditsMemoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
