import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './table/sortable.directive';
import { TableComponent } from './table/table.component';
import { CategoryTableComponent } from './category-table/category-table.component';



@NgModule({

  declarations: [TableComponent, CategoryTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbdSortableHeader,
    NgbPaginationModule,

  ],
  exports: [
    TableComponent,
    CategoryTableComponent

  ]
})
export class SharedModule { }
