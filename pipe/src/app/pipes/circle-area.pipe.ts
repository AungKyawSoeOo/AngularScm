import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circleArea'
})
export class CircleAreaPipe implements PipeTransform {

  transform(r:number , ...args: any[]): any {
    const pi=3.14;
    let calc=pi*r*r;
    let area={r,calc}
    return area;
  }

}
