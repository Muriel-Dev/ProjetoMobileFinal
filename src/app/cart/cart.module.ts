import { NgModule } from '@angular/core';
import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPage,
    CartPageRoutingModule,
  ],
})
export class CartPageModule {}
