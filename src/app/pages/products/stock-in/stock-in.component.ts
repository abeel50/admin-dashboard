import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PRODUCTS } from 'src/app/_constants';
import { Product, StockIn } from 'src/app/_interfaces';

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit {

  _products: Product[] = PRODUCTS;

  stockData: StockIn[] = [];

  isFormSubmit: boolean = false;
  form: FormGroup;
  buttonTitle: string = "Save";


  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      productID: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      totalPrice: [{ value: null, disabled: true }, [Validators.required],]
    });
  }

  get f() { return this.form.controls; }

  changeQuantity() {
    let price = PRODUCTS.find(e => e.id === this.f['productID'].value)?.defaultPrice || 0;
    let qt = this.f['quantity'].value;
    this.f['totalPrice'].setValue(price * qt);
  }

  addStock() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }

    this.stockData.push({
      id: this.stockData.length + 1, productID: this.f['productID'].value,
      quantity: this.f['quantity'].value, totalPrice: this.f['totalPrice'].value
    });

    this.form.reset();
  }


}
