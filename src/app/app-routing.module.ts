import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationShellComponent } from './core/components/navigation-shell/navigation-shell.component';

const routes: Routes = [
  {
    path: 'app',
    component: NavigationShellComponent,
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'pos',
        loadChildren: () =>
          import('./pages/pos/pos.module').then((m) => m.PosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
