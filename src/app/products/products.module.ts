import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [
  IonicModule,
  CommonModule,
  FormsModule,
  ProductsPage,
  ExploreContainerComponentModule,
  ProductsPageRoutingModule
  ]
})
export class ProductsPageModule {}