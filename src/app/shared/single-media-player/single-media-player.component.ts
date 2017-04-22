import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { FeedEnclosure } from '../../model/feed';
import { NgRadio } from '../../shared/events.service';
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-single-media-player',
  templateUrl: './single-media-player.component.html',
  styleUrls: ['./single-media-player.component.css']
})

export class SingleMediaPlayerComponent implements OnInit {

  sources: Array<Object> = [];
  videoSources: Array<Object> = [];

  selectedMedia: FeedEnclosure;
  api: VgAPI;

  constructor(private radio: NgRadio) {
    console.log('Media Player Initialized...');
  }

  onVideoPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.play.bind(this));
  }

  play() {
    this.api.play();
  }

  ngOnInit() {
    this.radio.on('PlayMedia:audio').subscribe(message => {
      this.selectedMedia = <FeedEnclosure>message;
      console.log('Media Selection Radio (AUDIO) Receiving:' + this.selectedMedia.link + '|' + this.selectedMedia.type);
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.selectedMedia.link,
        type: this.selectedMedia.type
      });
      this.api.getDefaultMedia().currentTime = 0;
      this.api.play();
    });

    this.radio.on('PlayMedia:video').subscribe(message => {
      this.selectedMedia = <FeedEnclosure>message;
      console.log('Media Selection Radio (VIDEO) Receiving:' + this.selectedMedia.link + '|' + this.selectedMedia.type);
      this.sources = new Array<Object>();
      this.sources.push({
        src: this.selectedMedia.link,
        type: this.selectedMedia.type
      });
      this.api.getDefaultMedia().currentTime = 0;
      this.api.play();
    });
  }
}
