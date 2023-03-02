import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="#3921B9"
   }

}
