import { Pipe, PipeTransform } from '@angular/core';
import { DELIVERY_GUYS } from 'src/app/_constants/deliveryGuys';

@Pipe({
  name: 'deliveryGuyPipe'
})
export class DeliveryGuyPipe implements PipeTransform {

  transform(id: number) {
    if (id) {
      return DELIVERY_GUYS.find(d => d.id === id)?.name;
    }
    else return "None"
  }

}
