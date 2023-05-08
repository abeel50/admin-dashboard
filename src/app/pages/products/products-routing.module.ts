import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdatePriceListComponent } from './update-price-list/update-price-list.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'update-list', component: UpdatePriceListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
