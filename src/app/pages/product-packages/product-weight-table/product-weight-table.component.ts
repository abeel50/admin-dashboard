import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PackageProduct } from 'src/app/_interfaces';

@Component({
  selector: 'app-product-weight-table',
  templateUrl: './product-weight-table.component.html',
  styleUrls: ['./product-weight-table.component.css']
})
export class ProductWeightTableComponent implements OnInit {

  @Input() _packageProducts: PackageProduct[] = [];

  @Output() deleteProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onDeleteClick(id: number) {
    this.deleteProduct.emit(id);
  }

}
