import { TestBed } from '@angular/core/testing';

import { ApixuService } from './apixu.service';

describe('ApixuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApixuService = TestBed.get(ApixuService);
    expect(service).toBeTruthy();
  });
});
