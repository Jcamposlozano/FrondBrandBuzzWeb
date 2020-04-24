import { TestBed } from '@angular/core/testing';

import { ServerDraflineSkipTestsService } from './server-drafline--skip-tests.service';

describe('ServerDraflineSkipTestsService', () => {
  let service: ServerDraflineSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDraflineSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
