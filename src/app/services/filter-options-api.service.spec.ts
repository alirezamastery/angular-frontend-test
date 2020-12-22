import { TestBed } from '@angular/core/testing';

import { FilterOptionsApiService } from './filter-options-api.service';

describe('FilterOptionsApiService', () => {
  let service: FilterOptionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterOptionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
