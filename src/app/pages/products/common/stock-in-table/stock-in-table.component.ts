import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StockIn } from 'src/app/_interfaces';

@Component({
  selector: 'app-stock-in-table',
  templateUrl: './stock-in-table.component.html',
  styleUrls: ['./stock-in-table.component.css']
})
export class StockInTableComponent implements OnInit {

  @Input() stockData: StockIn[] = [];

  @Output() deleteStock = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteClick(id: number) {
    this.deleteStock.emit(id);

  }

}
