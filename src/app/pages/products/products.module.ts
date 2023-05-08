import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdatePriceListComponent } from './update-price-list/update-price-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductSubCategoryTableComponent } from './common/product-sub-category-table/product-sub-category-table.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
  declarations: [ProductsListComponent, UpdatePriceListComponent, AddProductComponent, ProductSubCategoryTableComponent]
})
export class ProductsModule { }
