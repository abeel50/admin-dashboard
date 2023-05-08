import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryGuy } from 'src/app/_interfaces';

@Component({
  selector: 'app-live-orders',
  templateUrl: './live-orders.component.html',
  styleUrls: ['./live-orders.component.css']
})
export class LiveOrdersComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  @ViewChild('assignDeliveryGuyModal', { static: false }) assignModal: any;

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


}
