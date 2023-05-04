import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { SliderComponent } from './slider/slider.component';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoryTableComponent } from './common/sub-category-table/sub-category-table.component';
import { CategoryTableComponent } from './common/category-table/category-table.component';
import { NgbdSortableHeader } from './common/category-table/sortable.directive';
import { LocationsComponent } from './locations/locations.component';
import { LocationSortableHeader } from './common/location-table/location-sortable.directive';
import { LocationTableComponent } from './common/location-table/location-table.component';
import { ProductComponent } from './product/product.component';
import { ProductSubCategoryTableComponent } from './common/product-sub-category-table/product-sub-category-table.component';

@NgModule({
  imports: [
    ConfigRoutingModule,
    SharedModule,
    NgbdSortableHeader,
    LocationSortableHeader

  ],
  declarations: [FeaturedCategoriesComponent, SliderComponent, LocationsComponent, ProductComponent,
    LocationTableComponent, SubCategoryTableComponent, CategoryTableComponent,
    ProductSubCategoryTableComponent]
})
export class ConfigModule { }
