import { Component, OnInit } from '@angular/core';
import { PRODUCT_CATEGORIES } from 'src/app/_constants';
import { ProductCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  productCategories: ProductCategory[] = PRODUCT_CATEGORIES;
  selectedCategory: any = null;

  ngOnInit() {
  }

}
