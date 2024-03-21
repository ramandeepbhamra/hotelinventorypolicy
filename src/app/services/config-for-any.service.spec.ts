import { TestBed } from '@angular/core/testing';

import { ConfigForAnyService } from './config-for-any.service';

describe('ConfigForAnyService', () => {
  let service: ConfigForAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigForAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
