import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdMmk'
})
export class UsdMmkPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    let mmk;
    mmk=value * 2200;
    let currency={value,mmk}
    return currency
  }

}
