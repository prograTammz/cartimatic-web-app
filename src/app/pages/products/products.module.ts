import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListPage } from './products-list/products-list.page';
import { ProductsManipulatePage } from './products-manipulate/products-manipulate.page';
import { ProductsDetailsPage } from './products-details/products-details.page';

@NgModule({
  declarations: [ProductsListPage, ProductsManipulatePage, ProductsDetailsPage],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
