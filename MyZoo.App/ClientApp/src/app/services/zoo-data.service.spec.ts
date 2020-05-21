import { TestBed } from '@angular/core/testing';

import { ZooDataService } from './zoo-data.service';

describe('ZooDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZooDataService = TestBed.get(ZooDataService);
    expect(service).toBeTruthy();
  });
});
