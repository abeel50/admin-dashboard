import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FeaturedSubCategory } from 'src/app/_interfaces';

@Component({
  selector: 'app-sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.css']
})
export class SubCategoryFormComponent implements OnInit, OnChanges {

  @Input() form_control: FormControl;


  isFormSubmit: boolean = false;
  form: FormGroup;

  subCat: FeaturedSubCategory[] = [];

  constructor(private formBuilder: FormBuilder,) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('in changes');

    if (changes['form_control']) {

      console.log(changes['form_control'].currentValue);
    }
  }

  ngOnInit() {
    this.create();

    // this.subCat = this.form_control.value;
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
    this.subCat.push({ id: this.subCat.length + 1, title: this.f['title'].value });
    this.form_control.setValue(this.subCat);
    this.form.reset();
    this.isFormSubmit = false;

  }


  deleteSubCategory(e: number) {
    this.subCat = this.subCat.filter(item => item.id !== e);
    this.form_control.setValue(this.subCat);
  }

}
