import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvBulkuploadComponent } from './inv-bulkupload.component';

describe('InvBulkuploadComponent', () => {
  let component: InvBulkuploadComponent;
  let fixture: ComponentFixture<InvBulkuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvBulkuploadComponent]
    });
    fixture = TestBed.createComponent(InvBulkuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
