import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryGuy } from 'src/app/_interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {
  isFormSubmit: boolean = false;
  form: FormGroup;
  buttonTitle: string = "Save";

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.create();
  }

  create() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      cnic: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      imageURL: ["https://dummyimage.com/150x150/000/fff"],
    });


  }
  get f() { return this.form.controls; }

  onImageSelected(event: any) {
    const file = (event.target).files[0];
    console.log(file);
  }

  // Save button
  onSubmit() {
    this.isFormSubmit = true;

    if (this.form.invalid) {
      return;
    }
    Swal.fire('', `${JSON.stringify(this.form.value)}`, 'info')
  }

  onEditClick(e: DeliveryGuy) {
    this.isFormSubmit = false;
    this.buttonTitle = "Edit";
    this.form.patchValue(e);
  }

}
