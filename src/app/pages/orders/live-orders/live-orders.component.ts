import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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


  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }


  deliveryGuys: DeliveryGuy[] = [
    { id: 1, name: 'Delivery Guy 1' },
    { id: 2, name: 'Delivery Guy 2' },
    { id: 3, name: 'Delivery Guy 3' }
  ];
  selectedDeliveryGuys: DeliveryGuy[] = [];


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
