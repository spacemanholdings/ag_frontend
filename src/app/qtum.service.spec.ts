import { TestBed } from '@angular/core/testing';

import { QtumService } from './qtum.service';

describe('QtumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QtumService = TestBed.get(QtumService);
    expect(service).toBeTruthy();
  });
});
