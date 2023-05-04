import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { SliderComponent } from './slider/slider.component';
import { ConfigRoutingModule } from './config-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubCategoryTableComponent } from './sub-category-table/sub-category-table.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { NgbdSortableHeader } from './category-table/sortable.directive';

@NgModule({
  imports: [
    ConfigRoutingModule,
    SharedModule,
    NgbdSortableHeader

  ],
  declarations: [FeaturedCategoriesComponent, SliderComponent, SubCategoryTableComponent, CategoryTableComponent]
})
export class ConfigModule { }
