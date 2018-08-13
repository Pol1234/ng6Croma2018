import { TestBed, inject } from '@angular/core/testing';

import { QueHacemosService } from './que-hacemos.service';

describe('QueHacemosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueHacemosService]
    });
  });

  it('should be created', inject([QueHacemosService], (service: QueHacemosService) => {
    expect(service).toBeTruthy();
  }));
});
