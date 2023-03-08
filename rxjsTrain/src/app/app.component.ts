import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';
import {Observable,of,filter, reduce,fromEvent, interval,buffer, iif, count,max, min,from,groupBy} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('myButton', { static: true })
  myButton!: ElementRef;
  title = 'rxjsTrain';
  observer=new Observable((subscriber)=>{
    subscriber.next('My Observable')
    subscriber.next({name:'John Doe',age:24})
    subscriber.complete()
  })

  //pipe
  obs=of(1,2,3,4,5,6,7,8,9,10)
  filterPipe=this.obs.pipe(
    filter(x=>x%2===0),
    reduce((acc,current)=>acc+current,0)
  )




  ngOnInit() {

    this.observer.subscribe({
      next: x => console.log(x),
      error: e => console.log(e),
      complete:()=>console.log("Observer got completed")
    });

      //pipe subscribe
      const button = this.myButton.nativeElement;
      const clicks$ = fromEvent(button, 'click');
      let interval_events=interval(1000);
      let buffered_array=interval_events.pipe(buffer(clicks$));
      buffered_array.subscribe((arr) => console.log(arr));

      //If
    let task1=iif(
      ()=>(Math.floor(Math.random()*10) % 2 === 0),
      of("Even Case"),
      of("Odd Case")
    );
    task1.subscribe(v=>console.log(v));

    //count
    let all_nums=of(1,7,5,6,8);
    let final_val=all_nums.pipe(count());
    final_val.subscribe(x=>console.log("length: "+x));

    //max
    let maxList=of(1,3,6,8,11,23,45);
    let  maxNum=maxList.pipe(max())
    maxNum.subscribe(x=>console.log("Max num "+x))

    //min
    let minNum=maxList.pipe(min())
    minNum.subscribe(x=>console.log("Min num "+x));

    //groupBy
    const data=[
      {groupId:"QA",value:1},
      {groupId:"Development",value:3},
      {groupId:"QA",value:5},
      {groupId:"Development",value:6},
      {groupId:"QA",value:2}
    ]
    const gp=from(data).pipe(groupBy(item=>item.groupId));
    gp.subscribe(x=>console.log(x));
  }



}
