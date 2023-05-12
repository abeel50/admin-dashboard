import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdatePriceListComponent } from './update-price-list/update-price-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductPackingTableComponent } from './common/product-packing-table/product-packing-table.component';
import { StockInComponent } from './stock-in/stock-in.component';
import { StockInTableComponent } from './common/stock-in-table/stock-in-table.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
  declarations: [ProductsListComponent, UpdatePriceListComponent, AddProductComponent, ProductPackingTableComponent,
    StockInComponent, StockInTableComponent]
})
export class ProductsModule { }
