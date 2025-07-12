import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AdminTabsPage } from './admin-tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AdminTabsPage,
    RouterModule.forChild([
      {
        path: '',
        component: AdminTabsPage,
        children: [
          {
            path: 'produtos',
            loadComponent: () =>
              import('../produtos-admin/produtos-admin.page').then((m) => m.ProdutosAdminPage),
          },
          {
            path: 'pedidos',
            loadComponent: () =>
              import('../pedidos-admin/pedidos-admin.page').then((m) => m.PedidosAdminPage),
          },
          {
            path: 'perfil',
            loadComponent: () =>
              import('../perfil-admin/perfil-admin.page').then((m) => m.PerfilAdminPage),
          },
          {
            path: '',
            redirectTo: 'produtos',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]),
  ],
})
export class AdminTabsPageModule {}
