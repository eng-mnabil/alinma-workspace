import { TestBed } from '@angular/core/testing';

import { AlinmaGlobalService } from './alinma-global.service';

describe('AlinmaGlobalService', () => {
  let service: AlinmaGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlinmaGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
