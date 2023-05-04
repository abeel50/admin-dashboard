import { Component, OnInit } from '@angular/core';
import { PRODUCT_SUB_CATEGORIES } from 'src/app/_constants';
import { ProductSubCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-product-sub-category-table',
  templateUrl: './product-sub-category-table.component.html',
  styleUrls: ['./product-sub-category-table.component.css']
})
export class ProductSubCategoryTableComponent implements OnInit {

  productSubCategories: ProductSubCategory[] = PRODUCT_SUB_CATEGORIES;
  constructor() { }

  ngOnInit() {
  }

}
