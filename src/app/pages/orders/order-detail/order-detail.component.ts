import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order = {
    id: 12345,
    customerName: 'John Doe',
    phoneNumber: '555-1234',
    deliveryAddress: '123 Main St, Anytown USA',
    deliveryStatus: 'In Transit',
    deliveryGuy: 'Bob Smith',
    totalPrice: 129.99,
    items: [
      { id: 1, productName: 'Product A', quantity: 2, price: 59.99 },
      { id: 2, productName: 'Product B', quantity: 1, price: 10.00 },
      { id: 3, productName: 'Product C', quantity: 3, price: 20.00 }
    ]
  };

  constructor() { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // Here you can retrieve the actual order data from your backend API using the provided ID
  }

}
