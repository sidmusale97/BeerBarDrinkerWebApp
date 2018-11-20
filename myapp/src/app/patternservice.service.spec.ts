import { TestBed } from '@angular/core/testing';

import { PatternserviceService } from './patternservice.service';

describe('PatternserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatternserviceService = TestBed.get(PatternserviceService);
    expect(service).toBeTruthy();
  });
});
