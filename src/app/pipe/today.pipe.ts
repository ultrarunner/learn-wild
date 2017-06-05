import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todayPipe'
})
export class TodayPipe implements PipeTransform {

  constructor() { }

  transform(value: string): boolean {
    var today = new Date();
    var dateValue = new Date(value);
    //console.log("today: " + today.getDate() + " " + today.getMonth() + " " + today.getFullYear());

    return today.getDate() === dateValue.getDate()
      && today.getMonth() === dateValue.getMonth()
      && today.getFullYear() === dateValue.getFullYear();
  }
}
