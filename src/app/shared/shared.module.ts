import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgSelectModule,

  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgSelectModule,
  ]
})
export class SharedModule { }
