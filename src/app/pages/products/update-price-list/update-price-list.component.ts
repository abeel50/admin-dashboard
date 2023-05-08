import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-price-list',
  templateUrl: './update-price-list.component.html',
  styleUrls: ['./update-price-list.component.css']
})
export class UpdatePriceListComponent implements OnInit {

  products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ];


  ngOnInit() {
  }

  updatePrice(product: any) {
    // Code to update price of the product in the database or API
    console.log('Price of ' + product.name + ' updated to ' + product.price);
  }

}
