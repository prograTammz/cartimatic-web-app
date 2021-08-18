import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-manipulate',
  templateUrl: './products-manipulate.page.html',
  styleUrls: ['./products-manipulate.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsManipulatePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
