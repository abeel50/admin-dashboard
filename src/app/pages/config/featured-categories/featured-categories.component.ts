import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeaturedCategory, FeaturedSubCategory } from 'src/app/_interfaces';
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

  // Sub Form
  isSubCategoryFormSubmit: boolean = false;
  subForm: FormGroup;
  subCat: FeaturedSubCategory[] = [];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
    this.createSubForm();
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
    this.subCat = fc.subCategories;
  }


  createSubForm() {
    this.subForm = this.formBuilder.group({
      title: [null, [Validators.required]],
    });
  }

  get sf() { return this.subForm.controls; }


  // Save button
  onSubmitSubForm() {
    this.isSubCategoryFormSubmit = true;

    if (this.subForm.invalid) {
      return;
    }
    this.subCat.push({ id: this.subCat.length + 1, title: this.sf['title'].value });
    this.subForm.reset();
    this.isSubCategoryFormSubmit = false;

  }


  deleteSubCategory(e: number) {
    this.subCat = this.subCat.filter(item => item.id !== e);
  }

}
