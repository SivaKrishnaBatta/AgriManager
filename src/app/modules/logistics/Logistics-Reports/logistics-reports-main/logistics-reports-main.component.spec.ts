import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsReportsMainComponent } from './logistics-reports-main.component';

describe('LogisticsReportsMainComponent', () => {
  let component: LogisticsReportsMainComponent;
  let fixture: ComponentFixture<LogisticsReportsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticsReportsMainComponent]
    });
    fixture = TestBed.createComponent(LogisticsReportsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
