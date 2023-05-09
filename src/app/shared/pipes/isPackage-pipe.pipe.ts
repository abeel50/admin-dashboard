import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPackagePipe'
})
export class IsPackagePipePipe implements PipeTransform {

  transform(pack: boolean): any {
    return pack ? "Yes" : "No";
  }

}
