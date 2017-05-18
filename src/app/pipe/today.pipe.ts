import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'todayPipe'
})
export class TodayPipe implements PipeTransform {
  private defaultColor: string = "white";

  constructor(private sanitizer: DomSanitizer){}

  transform(value: string): SafeStyle {
    var today = new Date();
    var dateValue = new Date(value);
    var color: string = this.defaultColor;
    console.log("today: " + today.getDate() + " " + today.getMonth() + " " + today.getFullYear());

    if (
      today.getDate() === dateValue.getDate() 
      && today.getMonth() === dateValue.getMonth()
      && today.getFullYear() === dateValue.getFullYear()
    ) {
      color = "#b62025";
    }
    return this.sanitizer.bypassSecurityTrustStyle(color);
  }
}
