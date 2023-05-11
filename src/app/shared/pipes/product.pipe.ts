import { Pipe, PipeTransform } from '@angular/core';
import { PRODUCTS } from 'src/app/_constants';

@Pipe({
  name: 'productPipe'
})
export class ProductPipe implements PipeTransform {

  transform(id: number) {
    if (id) {
      return PRODUCTS.find(e => e.id === id)?.title_english;
    }
  }

}
