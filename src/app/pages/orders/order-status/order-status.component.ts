import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
})
export class OrderStatusComponent implements OnInit {

  @Input() status: number;
  constructor() { }

  ngOnInit() {
  }

}
