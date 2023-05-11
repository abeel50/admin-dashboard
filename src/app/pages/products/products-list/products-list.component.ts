import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/_constants';
import { Product } from 'src/app/_interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = PRODUCTS;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddClick() {
    this.router.navigate(['/products/add']);
  }

}
