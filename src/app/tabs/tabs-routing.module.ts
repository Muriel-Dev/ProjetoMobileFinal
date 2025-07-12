import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../orders/orders.module').then(m => m.OrdersPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/products',
        pathMatch: 'full',
      }
    ]
  }
];

