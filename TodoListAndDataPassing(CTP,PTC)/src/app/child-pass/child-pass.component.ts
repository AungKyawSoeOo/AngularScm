import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-pass',
  templateUrl: './child-pass.component.html',
  styleUrls: ['./child-pass.component.css']
})
export class ChildPassComponent {
  @Output() updateDataEvent=new EventEmitter<string>();
}
