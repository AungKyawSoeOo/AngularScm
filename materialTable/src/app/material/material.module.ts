import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
// import { CommonModule } from '@angular/common';

const modules=[
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  FormsModule
]

@NgModule({
 
  imports: [
    modules
  ],
  exports:[
    modules
  ]
})
export class MaterialModule { }
