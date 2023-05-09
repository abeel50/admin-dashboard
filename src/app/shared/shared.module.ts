import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorsComponent } from './errors/errors.component';
import { IsPackagePipePipe } from './pipes/isPackage-pipe.pipe';


@NgModule({

  declarations: [
    ErrorsComponent,

    // Pipes
    IsPackagePipePipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgSelectModule,

  ],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgSelectModule,

    // Components
    ErrorsComponent,

    //Pipes
    IsPackagePipePipe
  ]
})
export class SharedModule { }
