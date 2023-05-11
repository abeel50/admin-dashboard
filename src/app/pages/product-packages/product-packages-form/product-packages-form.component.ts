import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PRODUCTS } from 'src/app/_constants';
import { FeaturedCategory, Package, PackageProduct, Product } from 'src/app/_interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-packages-form',
  templateUrl: './product-packages-form.component.html',
  styleUrls: ['./product-packages-form.component.css']
})
export class ProductPackagesFormComponent implements OnInit {

  _products: Product[] = PRODUCTS;
  isFormSubmit: boolean = false;
  form: FormGroup;
  buttonTitle: string = "Save";

  // Sub Form
  isProductFormSubmit: boolean = false;
  subForm: FormGroup;
  subProducts: PackageProduct[] = [];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
    this.createSubForm();
  }

  create() {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      totalPrice: [null, [Validators.required]],
      products: []
    });
  }

  get f() { return this.form.controls; }

  // Save/edit button
  onSubmit() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }
    this.f['products'].setValue(this.subProducts);
    Swal.fire('', `${JSON.stringify(this.form.value)}`, 'info')
  }

  // Edit Form Event Catcher
  editClick(pack: Package) {
    this.isFormSubmit = false;
    this.buttonTitle = "Edit";
    this.form.patchValue(pack);
    this.subProducts = pack.products;
  }


  createSubForm() {
    this.subForm = this.formBuilder.group({
      productID: [null, [Validators.required]],
      weight: [null, [Validators.required]]
    });
  }

  get sf() { return this.subForm.controls; }


  // Save button
  onSubmitSubForm() {
    this.isProductFormSubmit = true;

    if (this.subForm.invalid) {
      return;
    }
    this.subProducts.push({ id: this.subProducts.length + 1, productID: this.sf['productID'].value, weight: this.sf['weight'].value });
    this.subForm.reset();
    this.isProductFormSubmit = false;

  }


  deleteSubProduct(e: number) {
    this.subProducts = this.subProducts.filter(item => item.id !== e);
  }
}
