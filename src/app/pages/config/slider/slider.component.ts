import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Slider } from 'src/app/_interfaces';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

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
    });
  }

  get f() { return this.form.controls; }


  // Save button
  onSubmit() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }
    Swal.fire('', `${JSON.stringify(this.form.value)}`, 'info')
  }

  // Edit Form Event Catcher
  editClick(s: Slider) {
    this.isFormSubmit = false;
    this.buttonTitle = "Edit";
    this.form.patchValue(s);
  }

}
