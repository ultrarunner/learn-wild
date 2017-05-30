import { TestBed, inject } from '@angular/core/testing';
import { NgRadio } from './events.service';

describe('EventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgRadio]
    });
  });

  it('should ...', inject([NgRadio], (service: NgRadio) => {
    expect(service).toBeTruthy();
  }));
});
