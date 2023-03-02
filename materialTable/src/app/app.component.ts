import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PeriodicElement } from './interface/PeriodicElement';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
const ELEMENT_DATA:PeriodicElement[]=[
  {position:1,name:'Hydrogen',weight:1.007,symbol:'H',price:'Expensive'},
  {position:2,name:'Helium',weight:4.0026,symbol:'He',price:'Cheap'},
  {position:3,name:'Lithium',weight:6.941,symbol:'Li',price:'Expensive'},
  {position:4,name:'Beryllium',weight:9.0122,symbol:'Be',price:'Cheap'},
  {position:5,name:'Boron',weight:10.011,symbol:'B',price:'Cheap'},
  {position:6,name:'Carbon',weight:12.0107,symbol:'C',price:'Expensive'},
  {position:7,name:'Nitrogen',weight:14.0067,symbol:'N',price:'Cheap'},
  {position:8,name:'Oxygen',weight:15.9994,symbol:'O',price:'Cheap'},
  {position:9,name:'Fluorine',weight:18.9984,symbol:'F',price:'Cheap'},
  {position:10,name:'Neon',weight:20.1797,symbol:'Ne',price:'Expensive'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'materialTable';
  displayedColumns:string[]=['position','name','weight','symbol','price'];
  apiResponse=[];
  dataSource=new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private _liveAnnouncer:LiveAnnouncer){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 applyFilter(event:Event){
  const filterValue=(event.target as HTMLInputElement).value;
  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  if(this.dataSource.paginator){
    // search start from first page
    this.dataSource.paginator.firstPage()
  }
 }
}
