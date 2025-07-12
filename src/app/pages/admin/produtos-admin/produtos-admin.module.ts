import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosAdminPageRoutingModule } from './produtos-admin-routing.module';
import { ProdutosAdminPage } from './produtos-admin.page';

@NgModule({
  declarations: [ProdutosAdminPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosAdminPageRoutingModule
  ]
})
export class ProdutosAdminPageModule {}
