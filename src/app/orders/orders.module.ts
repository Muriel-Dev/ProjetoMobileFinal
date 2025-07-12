import { NgModule } from '@angular/core';
import { OrdersPageRoutingModule } from './orders-routing.module';
import { OrdersPage } from './orders.page';

@NgModule({
  imports: [
    OrdersPageRoutingModule,
    OrdersPage
  ]
})
export class OrdersPageModule {}