import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdatePriceListComponent } from './update-price-list/update-price-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { StockInComponent } from './stock/stock-in/stock-in.component';
import { StockOutComponent } from './stock/stock-out/stock-out.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'detail', component: ProductDetailComponent },
  { path: 'stock-in', component: StockInComponent },
  { path: 'stock-out', component: StockOutComponent },
  { path: 'update-list', component: UpdatePriceListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
