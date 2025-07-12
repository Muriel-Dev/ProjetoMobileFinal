import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosAdminPage } from './produtos-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosAdminPage
  },
  {
    path: 'admin-tabs',
    loadChildren: () => import('./../admin-tabs/admin-tabs.module').then( m => m.AdminTabsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosAdminPageRoutingModule {}
