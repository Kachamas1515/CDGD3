import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gende'
})
export class GendePipe implements PipeTransform {

  transform(value: any, male= 'Male', female: 'Female'): any {
    return value === 'M' ? male : female;
  }

}
