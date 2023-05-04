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
  providers: [CategoryService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
