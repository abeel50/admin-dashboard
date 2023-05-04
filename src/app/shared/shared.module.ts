import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryTableComponent } from './category-table/category-table.component';
import { NgbdSortableHeader } from './category-table/sortable.directive';



@NgModule({

  declarations: [CategoryTableComponent],
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
    CategoryTableComponent

  ]
})
export class SharedModule { }
