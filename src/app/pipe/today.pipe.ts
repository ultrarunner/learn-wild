import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'todayPipe'
})
export class TodayPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){

  }
  private defaultColor: string = "white";

  transform(value: string): SafeStyle {
    var today = new Date();
    var dateValue = new Date(value);
    var color: string = this.defaultColor;

    if (today.getDay() === dateValue.getDay() && today.getMonth() === dateValue.getMonth() && today.getFullYear() === dateValue.getFullYear()) {
      //console.log("match: " + today + " " + dateValue);
      color = "#b62025";
    }
    return this.sanitizer.bypassSecurityTrustStyle(color);
  }
}
