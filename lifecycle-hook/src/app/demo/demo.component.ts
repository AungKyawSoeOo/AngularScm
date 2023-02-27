import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() value:string ="elephant";
  // By the time constructor called , input properties are not updated
  constructor(){
    console.log('Constructor called');
    console.log(this.value);
  }
}
