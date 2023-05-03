import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { SliderComponent } from './slider/slider.component';
import { ConfigRoutingModule } from './config-routing.module';
import { TableComponent } from 'src/app/shared/table/table.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SharedModule

  ],
  declarations: [FeaturedCategoriesComponent, SliderComponent]
})
export class ConfigModule { }
