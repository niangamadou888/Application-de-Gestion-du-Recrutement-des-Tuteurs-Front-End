import { TestBed } from '@angular/core/testing';

import { FormCandidatureService } from './form-candidature.service';

describe('FormCandidatureService', () => {
  let service: FormCandidatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCandidatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
