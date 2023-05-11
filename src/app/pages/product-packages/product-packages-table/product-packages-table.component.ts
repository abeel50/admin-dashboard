import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Package } from 'src/app/_interfaces';
import { ProductPackageService } from './product-package.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-packages-table',
  templateUrl: './product-packages-table.component.html',
  styleUrls: ['./product-packages-table.component.css']
})
export class ProductPackagesTableComponent {

  @Output() editPackage = new EventEmitter();

  packages$: Observable<Package[]>;
  total$: Observable<number>;


  constructor(public service: ProductPackageService) {
    this.packages$ = service.packages$;
    this.total$ = service.total$;
  }

  onEditClick(p: Package) {
    this.editPackage.emit(p);
  }


}
