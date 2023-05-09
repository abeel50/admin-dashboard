import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from 'src/app/_interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

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
  editClick(l: Location) {
    this.isFormSubmit = false;
    this.buttonTitle = "Edit";
    this.form.patchValue(l);
  }

}
