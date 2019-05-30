import {TestBed} from '@angular/core/testing';

import {DictionaryService, IDictionaryService} from './dictionary.service';

describe('DictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DictionaryService = TestBed.get(IDictionaryService);
    expect(service).toBeTruthy();
  });
});
