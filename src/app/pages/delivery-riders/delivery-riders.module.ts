import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RidersComponent } from './riders/riders.component';
import { DeliveryRidersRoutingModule } from './delivery-riders-routing.module';
import { RidersTableComponent } from './riders-table/riders-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DeliveryRidersRoutingModule
  ],
  declarations: [RidersComponent, RidersTableComponent]
})
export class DeliveryRidersModule { }
