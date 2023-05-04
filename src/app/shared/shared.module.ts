import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,

  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
  ]
})
export class SharedModule { }
