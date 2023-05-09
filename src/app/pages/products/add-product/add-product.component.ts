import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PRODUCT_CATEGORIES } from 'src/app/_constants';
import { Packing, ProductCategory } from 'src/app/_interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productCategories: ProductCategory[] = PRODUCT_CATEGORIES;

  _packings: Packing[] = [];

  isPackingFormSubmit: boolean = false;
  packingForm: FormGroup;


  isFormSubmit: boolean = false;
  form: FormGroup;
  buttonTitle: string = "Save";

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
    this.createPackingForm();
  }

  create() {
    this.form = this.formBuilder.group({
      title_english: [null, [Validators.required]],
      title_urdu: [null, [Validators.required]],
      category: [null, [Validators.required]],
      subCategory: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      defaultPrice: [null, [Validators.required]],
      packings: []
    });

    this.f['defaultPrice'].valueChanges.subscribe((value) => {
      if (value && value > 0) {
        this.packingForm.controls['weight'].enable();
        this.packingForm.controls['info'].enable();
        //  this.packingForm.controls['price'].enable();

      }
    });


  }
  get f() { return this.form.controls; }



  createPackingForm() {
    this.packingForm = this.formBuilder.group({
      weight: [{ value: null, disabled: true }, Validators.required],
      info: [{ value: null, disabled: true }, Validators.required],
      price: [{ value: null, disabled: true }, Validators.required]
    });
    this.pf['weight'].valueChanges.subscribe((value) => {
      if (value && value > 0) {
        this.pf['price'].setValue(this.pf['weight'].value * this.f['defaultPrice'].value);

      }
    });
  }

  get pf() { return this.packingForm.controls; }


  // adds packing to array
  addPacking() {

    this.isPackingFormSubmit = true;

    if (this.packingForm.invalid) {
      return;
    }
    this._packings.push({
      id: this._packings.length + 1,
      weight: this.pf['weight'].value,
      info: this.pf['info'].value,
      price: this.pf['price'].value
    })

    this.packingForm.reset();
    this.isPackingFormSubmit = false;

  }

  // Save button
  onSubmit() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }
    this.f['packings'].setValue(this._packings);
    Swal.fire('', `${JSON.stringify(this.form.value)}`, 'info')
  }


}
