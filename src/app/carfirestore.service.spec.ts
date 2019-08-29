import { TestBed } from '@angular/core/testing';

import { CarfirestoreService } from './carfirestore.service';

describe('CarfirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarfirestoreService = TestBed.get(CarfirestoreService);
    expect(service).toBeTruthy();
  });
});
