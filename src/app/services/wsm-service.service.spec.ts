import { TestBed } from '@angular/core/testing';

import { WsmServiceService } from './wsm-service.service';

describe('WsmServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsmServiceService = TestBed.get(WsmServiceService);
    expect(service).toBeTruthy();
  });
});
