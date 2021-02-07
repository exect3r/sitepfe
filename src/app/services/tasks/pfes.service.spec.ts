import { TestBed } from '@angular/core/testing';
import { PfesService } from './pfes.service';

describe('PfesService', () => {
  let service: PfesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PfesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
