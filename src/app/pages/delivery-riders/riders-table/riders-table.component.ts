import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryGuy } from 'src/app/_interfaces';
import { DeliveryService } from './rider.service';

@Component({
  selector: 'app-riders-table',
  templateUrl: './riders-table.component.html',
  styleUrls: ['./riders-table.component.css']
})
export class RidersTableComponent {

  @Output() editdeliveryGuy = new EventEmitter();


  deliveryGuys$: Observable<DeliveryGuy[]>;
  total$: Observable<number>;


  constructor(public service: DeliveryService) {
    this.deliveryGuys$ = service.deliveryGuys$;
    this.total$ = service.total$;
  }

  onEditClick(dg: DeliveryGuy) {
    this.editdeliveryGuy.emit(dg);
  }


}
