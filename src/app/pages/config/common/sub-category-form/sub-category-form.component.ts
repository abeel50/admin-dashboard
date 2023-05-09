import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FeaturedSubCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.css']
})
export class SubCategoryFormComponent implements OnInit {
  @Input() form_control: FormControl;


  isFormSubmit: boolean = false;
  form: FormGroup;

  subCat: FeaturedSubCategory[] = [];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
    });
  }

  get f() { return this.form.controls; }


  // Save button
  onSubmit() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }
    this.subCat.push({ id: this.subCat.length + 1, title: this.f['title'].value })
    this.form_control.setValue(this.subCat);

  }


  deleteSubCategory(e: number) {
    this.subCat = this.subCat.filter(item => item.id !== e);
    this.form_control.setValue(this.subCat);
  }

}
