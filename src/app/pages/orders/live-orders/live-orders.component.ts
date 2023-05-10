import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DELIVERY_GUYS } from 'src/app/_constants/deliveryGuys';
import { ORDERS } from 'src/app/_constants/orders';
import { DeliveryGuy, Order } from 'src/app/_interfaces';

@Component({
  selector: 'app-live-orders',
  templateUrl: './live-orders.component.html',
  styleUrls: ['./live-orders.component.css']
})
export class LiveOrdersComponent implements OnInit {

  @ViewChild('assignDeliveryGuyModal', { static: false }) assignModal: any;

  _orders: Order[] = ORDERS;
  _deliveryGuys: DeliveryGuy[] = DELIVERY_GUYS;

  totalOrders: number = 0;
  delivered: number = 0;
  pending: number = 0;
  inTransit: number = 0;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this._orders.forEach(o => {
      if (o.status === 1) {
        this.pending++;
      } else if (o.status === 2) {
        this.inTransit++;
      } else {
        this.delivered++;
      }

    });
    this.totalOrders = this._orders.length;

  }


  openAssignModal() {
    this.modalService.open(this.assignModal);
  }

  confirm() {
    this.modalService.dismissAll(this.assignModal);
  }

  navigateOrderDetail() {
    this.router.navigate(['/orders/detail']);
  }


}
