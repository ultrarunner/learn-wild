import { Pipe, PipeTransform } from '@angular/core';
import { TodayPipe } from './today.pipe';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

describe('TodayPipePipe', () => {
  it('create an instance', () => {
    const pipe = new TodayPipe();
    expect(pipe).toBeTruthy();
  });
});
