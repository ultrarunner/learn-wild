import { TestBed, inject } from '@angular/core/testing';

import { EndPointService } from './endpoint.service';

describe('EndpointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndPointService]
    });
  });

  it('should ...', inject([EndPointService], (service: EndPointService) => {
    expect(service).toBeTruthy();
  }));
});
