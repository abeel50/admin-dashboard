import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StockOut } from 'src/app/_interfaces';

@Component({
  selector: 'app-stock-out-table',
  templateUrl: './stock-out-table.component.html',
  styleUrls: ['./stock-out-table.component.css']
})
export class StockOutTableComponent implements OnInit {

  @Input() stockData: StockOut[] = [];

  @Output() deleteStock = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteClick(id: number) {
    this.deleteStock.emit(id);

  }

}
