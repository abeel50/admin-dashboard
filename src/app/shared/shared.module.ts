import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './table/sortable.directive';
import { TableComponent } from './table/table.component';



@NgModule({

  declarations: [TableComponent],
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
    TableComponent

  ]
})
export class SharedModule { }
