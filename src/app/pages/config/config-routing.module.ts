import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { LocationsComponent } from './locations/locations.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'featured-categories', component: FeaturedCategoriesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'products', component: ProductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
