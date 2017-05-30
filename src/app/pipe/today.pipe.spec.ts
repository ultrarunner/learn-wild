import { Pipe, PipeTransform } from '@angular/core';
import { TodayPipe } from './today.pipe';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

describe('TodayPipe', () => {
  it('create an instance', () => {
    const pipe = TodayPipe;
    expect(pipe).toBeTruthy();
  });
});
