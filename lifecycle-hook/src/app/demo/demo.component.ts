import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,
OnDestroy
{
  @Input() value: string = 'elephant';
  // By the time constructor called , input properties are not updated
  constructor() {
    console.log('Constructor called');
    // console.log(this.value);
  }

  //ngOnChages is called first
  //and every times when the value of Input bound changes
  // If value is not change , ngOnChanges won't call
  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(change);
  }
  ngOnInit() {
    console.log('ngOnInit called');
    console.log(this.value);
  }
  //and every times when something change(event happed)
  // called for every change detection circle
  //Unlike ngOnChanges , It will still called even Input doesn't change
  ngDoCheck() {
    console.log('ngDoChecked called');
  }

  //called when projected content initialized
  //only called first change detection circle
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  //called for each change detection circle
  //also called when projected content changes
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  // called when the componet views and all its child views are fully initialized
  // called only one when first change detection circle
  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }

  // called for every change in the views unlike view init that called only once when initialized
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  //
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
