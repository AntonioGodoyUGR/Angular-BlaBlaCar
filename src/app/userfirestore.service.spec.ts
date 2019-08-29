import { TestBed } from '@angular/core/testing';

import { UserfirestoreService } from './userfirestore.service';

describe('UserfirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserfirestoreService = TestBed.get(UserfirestoreService);
    expect(service).toBeTruthy();
  });
});
