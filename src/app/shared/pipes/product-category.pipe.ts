import { Pipe, PipeTransform } from '@angular/core';
import { PRODUCT_CATEGORIES } from 'src/app/_constants';

@Pipe({
  name: 'productCategoryPipe'
})
export class ProductCategoryPipe implements PipeTransform {

  transform(id: number) {
    if (id) {
      return PRODUCT_CATEGORIES.find(e => e.id === id)?.title;
    }
  }

}
