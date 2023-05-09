import { NgModule } from '@angular/core';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { SliderComponent } from './slider/slider.component';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoryTableComponent } from './common/sub-category-table/sub-category-table.component';
import { CategoryTableComponent } from './common/category-table/category-table.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationTableComponent } from './common/location-table/location-table.component';
import { SliderTableComponent } from './common/slider-table/slider-table.component';

@NgModule({
  imports: [
    ConfigRoutingModule,
    SharedModule,


  ],
  declarations: [FeaturedCategoriesComponent, SliderComponent, LocationsComponent,
    SliderTableComponent, LocationTableComponent, SubCategoryTableComponent, CategoryTableComponent]
})
export class ConfigModule { }
