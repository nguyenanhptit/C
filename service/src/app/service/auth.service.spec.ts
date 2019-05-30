import {TestBed} from '@angular/core/testing';

import {AuthService, IAuthService} from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(IAuthService);
    expect(service).toBeTruthy();
  });
});
