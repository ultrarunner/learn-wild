import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseFirstLetter'
})
export class UpperCaseFirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
  }
}
