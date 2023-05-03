import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { SliderComponent } from './slider/slider.component';
import { ConfigRoutingModule } from './config-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule
  ],
  declarations: [FeaturedCategoriesComponent, SliderComponent]
})
export class ConfigModule { }
