import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBulkuploadsComponent } from './inv-bulkuploads.component';

describe('InvBulkuploadsComponent', () => {
  let component: InvBulkuploadsComponent;
  let fixture: ComponentFixture<InvBulkuploadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvBulkuploadsComponent]
    });
    fixture = TestBed.createComponent(InvBulkuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
