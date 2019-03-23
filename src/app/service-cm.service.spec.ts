import { TestBed } from '@angular/core/testing';

import { ServiceCmService } from './service-cm.service';

describe('ServiceCmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCmService = TestBed.get(ServiceCmService);
    expect(service).toBeTruthy();
  });
});
