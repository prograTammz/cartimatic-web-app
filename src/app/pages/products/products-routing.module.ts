import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPage } from './products-list/products-list.page';
import { ProductsManipulatePage } from './products-manipulate/products-manipulate.page';
import { ProductsDetailsPage } from './products-details/products-details.page';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ProductsListPage,
    data: {
      pageName: 'Global.Pages.products',
      showBack: false,
      animation: 0,
    },
  },
  {
    path: 'create',
    component: ProductsManipulatePage,
    data: {
      pageName: 'Global.Pages.new-product',
      showBack: true,
      animation: 1,
    },
  },
  {
    path: 'edit',
    component: ProductsManipulatePage,
    data: {
      pageName: 'Global.Pages.edit-product',
      showBack: true,
      animation: 1,
    },
  },
  {
    path: 'details',
    component: ProductsDetailsPage,
    data: {
      pageName: 'Global.Pages.product-details',
      showBack: true,
      animation: 1,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
