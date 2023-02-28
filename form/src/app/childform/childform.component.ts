import { Component } from '@angular/core';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.css']
})
export class ChildformComponent {
 submit(login:any){
  console.log('Form submitted',login);
 }
}
