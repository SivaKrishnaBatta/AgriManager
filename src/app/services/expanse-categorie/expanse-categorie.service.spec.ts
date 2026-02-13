import { TestBed } from '@angular/core/testing';

import { ExpanseCategorieService } from './expanse-categorie.service';

describe('ExpanseCategorieService', () => {
  let service: ExpanseCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpanseCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
