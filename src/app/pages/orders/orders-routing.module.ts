import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveOrdersComponent } from './live-orders/live-orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: '', component: LiveOrdersComponent },
  { path: 'detail', component: OrderDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
