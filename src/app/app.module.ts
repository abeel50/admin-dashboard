import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { CountryService } from './table/country.service';
import { FormsModule } from '@angular/forms';
import { NgbdSortableHeader } from './table/sortable.directive';
import { CommonModule, DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavComponent,
    SideBarComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbdSortableHeader,
    NgbPaginationModule,
  ],
  providers: [CountryService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
