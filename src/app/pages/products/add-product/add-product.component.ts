import { Component, OnInit } from '@angular/core';
import { PRODUCT_CATEGORIES } from 'src/app/_constants';
import { ProductCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  productCategories: ProductCategory[] = PRODUCT_CATEGORIES;
  selectedCategory: any = null;

  ngOnInit() {
  }

}
