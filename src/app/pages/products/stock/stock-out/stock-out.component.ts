import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PRODUCTS } from 'src/app/_constants';
import { Product, StockOut } from 'src/app/_interfaces';

@Component({
  selector: 'app-stock-out',
  templateUrl: './stock-out.component.html',
  styleUrls: ['./stock-out.component.css']
})
export class StockOutComponent implements OnInit {

  _products: Product[] = PRODUCTS;
  stockData: StockOut[] = [];

  isFormSubmit: boolean = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      productID: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
    });
  }

  get f() { return this.form.controls; }


  addStock() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }

    this.stockData.push({
      id: this.stockData.length + 1, productID: this.f['productID'].value, quantity: this.f['quantity'].value,
    });

    this.isFormSubmit = false;
    this.form.reset();
  }

  deleteStock(e: number) {
    this.stockData = this.stockData.filter(item => item.id !== e);

  }

  onSave() {

  }


}
