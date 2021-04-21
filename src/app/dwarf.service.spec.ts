import { TestBed } from '@angular/core/testing';

import { DwarfService } from './dwarf.service';

describe('DwarfService', () => {
  let service: DwarfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwarfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
