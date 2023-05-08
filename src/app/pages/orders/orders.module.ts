import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveOrdersComponent } from './live-orders/live-orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    SharedModule,
    OrdersRoutingModule
  ],
  declarations: [LiveOrdersComponent, OrderDetailComponent]
})
export class OrdersModule { }
