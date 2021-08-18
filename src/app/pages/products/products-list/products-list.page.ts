import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
