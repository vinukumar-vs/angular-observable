import { TestBed } from '@angular/core/testing';

import { GlobalContextService } from './global-context.service';

describe('GlobalContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalContextService = TestBed.get(GlobalContextService);
    expect(service).toBeTruthy();
  });
});
