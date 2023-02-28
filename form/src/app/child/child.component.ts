import { Component,OnInit } from '@angular/core';
import{FormControl} from '@angular/forms';
import {Observable} from "rxjs";
import {map,startWith} from 'rxjs/operators'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  selectedValue:string='';
  options:string[]=['Angular','React','Vue'];
  objectOptions=[
    {name:'Angular'},
    {name:'Angular Material'},
    {name:'React'},
    {name:'Vue'}
  ];
  displayFn(subject:any){
    return subject? subject.name:undefined
  }
}
