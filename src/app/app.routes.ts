import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';



export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@nx-learning/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@nx-learning/orders').then((m) => m.OrdersComponent),
  },
];

