import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LogInComponent } from './auth/log-in/log-in.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('../app/pages/config/config.module').then(m => m.ConfigModule), },
      { path: 'products', loadChildren: () => import('../app/pages/products/products.module').then(m => m.ProductsModule), },
      { path: 'orders', loadChildren: () => import('../app/pages/orders/orders.module').then(m => m.OrdersModule), },
      { path: 'riders', loadChildren: () => import('../app/pages/delivery-riders/delivery-riders.module').then(m => m.DeliveryRidersModule), },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
