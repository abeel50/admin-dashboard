import { Component, Input, OnInit } from '@angular/core';
import { Packing } from 'src/app/_interfaces';

@Component({
  selector: 'app-product-packing-table',
  templateUrl: './product-packing-table.component.html',
  styleUrls: ['./product-packing-table.component.css']
})
export class ProductPackingTableComponent implements OnInit {
  @Input() packings: Packing[] = [];
  constructor() { }

  ngOnInit() {
  }

}
