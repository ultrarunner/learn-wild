/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RssService } from './rss.service';

describe('Service: Feed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [RssService]
    });
  });

  it('should inject the FeedService', inject([RssService], (service: RssService) => {
    expect(service).toBeTruthy();
  }));

  it('should retrieve the requested RSS feed', async(inject([RssService], (service: RssService) => {
    service.getFeedContent('https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml')
        .subscribe(result => {
          expect(result).toBeDefined();
          expect(result.status).toBe('ok');
          expect(result.items.length).toBeGreaterThan(0);
          });
    })));
});
