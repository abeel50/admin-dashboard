import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductPackagesRoutingModule } from './product-packages-routing.module';
import { ProductPackagesFormComponent } from './product-packages-form/product-packages-form.component';
import { ProductPackagesTableComponent } from './product-packages-table/product-packages-table.component';
import { ProductWeightTableComponent } from './product-weight-table/product-weight-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductPackagesRoutingModule
  ],
  declarations: [ProductPackagesFormComponent, ProductPackagesTableComponent, ProductWeightTableComponent]
})
export class ProductPackagesModule { }
