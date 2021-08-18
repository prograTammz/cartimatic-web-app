import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
