import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NavigationShellComponent } from './core/components/navigation-shell/navigation-shell.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {
    path: 'app',
    component: NavigationShellComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'pos',
        loadChildren: () =>
          import('./pages/pos/pos.module').then((m) => m.PosModule),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('./pages/store/store.module').then((m) => m.StoreModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
