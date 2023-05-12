import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdatePriceListComponent } from './update-price-list/update-price-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductPackingTableComponent } from './common/product-packing-table/product-packing-table.component';
import { StockInComponent } from './stock/stock-in/stock-in.component';
import { StockInTableComponent } from './common/stock-in-table/stock-in-table.component';
import { StockOutComponent } from './stock/stock-out/stock-out.component';
import { StockOutTableComponent } from './common/stock-out-table/stock-out-table.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
  declarations: [ProductsListComponent, ProductDetailComponent, UpdatePriceListComponent,
    AddProductComponent, ProductPackingTableComponent,
    StockInComponent, StockInTableComponent, StockOutComponent, StockOutTableComponent]
})
export class ProductsModule { }
