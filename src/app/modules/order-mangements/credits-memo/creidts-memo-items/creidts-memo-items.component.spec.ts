import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreidtsMemoItemsComponent } from './creidts-memo-items.component';

describe('CreidtsMemoItemsComponent', () => {
  let component: CreidtsMemoItemsComponent;
  let fixture: ComponentFixture<CreidtsMemoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreidtsMemoItemsComponent]
    });
    fixture = TestBed.createComponent(CreidtsMemoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
