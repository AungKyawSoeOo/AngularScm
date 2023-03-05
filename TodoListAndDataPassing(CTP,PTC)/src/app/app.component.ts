import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  tasks:any[]=[];
  users=[
    {name:'aung',email:'aung@gmail.com'},
    {name:'john',email:'john@gmail.com'}
  ]
  parent='I came from parent';
  addTask(item:string){
    console.log(item)
    this.tasks.push({id:this.tasks.length,name:item});
  };
  removeTask(id:number){
    this.tasks=this.tasks.filter(task=>task.id!==id);
  };
  
  // to pass child to parent
  data='x';
  updateData(item:string){
    console.log(item);
    this.data=item;
  }

  // two way binding
  twoData:any;
}
