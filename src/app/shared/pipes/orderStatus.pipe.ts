import { Pipe, PipeTransform } from '@angular/core';
import { ORDER_STATUS } from 'src/app/_constants';

@Pipe({
  name: 'orderStatusPipe'
})
export class OrderStatusPipe implements PipeTransform {

  transform(id: number) {
    if (id) {
      return ORDER_STATUS.find(e => e.id === id)?.value;
    }
  }

}
