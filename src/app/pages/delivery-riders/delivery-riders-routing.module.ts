import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidersComponent } from './riders/riders.component';

const routes: Routes = [
  { path: '', component: RidersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRidersRoutingModule { }
