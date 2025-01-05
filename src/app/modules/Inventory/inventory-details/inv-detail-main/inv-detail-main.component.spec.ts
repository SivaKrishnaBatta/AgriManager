import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailMainComponent } from './inv-detail-main.component';

describe('InvDetailMainComponent', () => {
  let component: InvDetailMainComponent;
  let fixture: ComponentFixture<InvDetailMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvDetailMainComponent]
    });
    fixture = TestBed.createComponent(InvDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
