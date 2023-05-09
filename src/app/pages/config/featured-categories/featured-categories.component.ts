import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeaturedCategory } from 'src/app/_interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.css']
})
export class FeaturedCategoriesComponent implements OnInit {
  isFormSubmit: boolean = false;
  form: FormGroup;
  buttonTitle: string = "Save";

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]],
      package: [false],
      subCategories: []
    });
  }

  get f() { return this.form.controls; }

  // Save/edit button
  onSubmit() {
    this.isFormSubmit = true;
    console.log(this.form.value);


    if (this.form.invalid) {
      return;
    }
    Swal.fire('', `${JSON.stringify(this.form.value)}`, 'info')
  }

  // Edit Form Event Catcher
  editClick(fc: FeaturedCategory) {
    this.isFormSubmit = false;
    this.buttonTitle = "Edit";
    this.form.patchValue(fc);
    console.log(this.form.value);

  }

}
