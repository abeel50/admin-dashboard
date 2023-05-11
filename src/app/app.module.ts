import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { DecimalPipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { CategoryService } from './pages/config/common/category-table/category.service';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SliderService } from './pages/config/common/slider-table/slider.service';
import { LocationService } from './pages/config/common/location-table/location.service';
import { DeliveryService } from './pages/delivery-riders/riders-table/rider.service';
import { ProductPackageService } from './pages/product-packages/product-packages-table/product-package.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavComponent,
    SideBarComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  exports: [

  ],
  providers: [CategoryService, SliderService, LocationService, DeliveryService, ProductPackageService, DecimalPipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
