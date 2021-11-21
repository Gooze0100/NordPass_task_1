import { TestBed } from '@angular/core/testing';

import { LeakedPassService } from './leaked-pass.service';

describe('LeakedPassService', () => {
  let service: LeakedPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeakedPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
