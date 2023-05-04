import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { SliderComponent } from './slider/slider.component';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoryTableComponent } from './sub-category-table/sub-category-table.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SharedModule

  ],
  declarations: [FeaturedCategoriesComponent, SliderComponent, SubCategoryTableComponent]
})
export class ConfigModule { }
