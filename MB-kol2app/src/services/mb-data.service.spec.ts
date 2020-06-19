import { TestBed } from '@angular/core/testing';

import { MBDataService } from './mb-data.service';

describe('MBDataService', () => {
  let service: MBDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MBDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
