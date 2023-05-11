import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPackagesFormComponent } from './product-packages-form/product-packages-form.component';

const routes: Routes = [
  { path: '', component: ProductPackagesFormComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPackagesRoutingModule { }
