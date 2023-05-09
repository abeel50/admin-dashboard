import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorsComponent } from './errors/errors.component';
import { IsPackagePipe } from './pipes/isPackage.pipe';
import { ProductCategoryPipe } from './pipes/product-category.pipe';


@NgModule({

  declarations: [
    ErrorsComponent,

    // Pipes
    IsPackagePipe,
    ProductCategoryPipe
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
    IsPackagePipe,
    ProductCategoryPipe,
  ]
})
export class SharedModule { }
