import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrls: ['./delivery-add.component.scss']
})
export class DeliveryAddComponent {

  deliveryForm: any;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.deliveryForm = this.formBuilder.group({
      CargoID: ['', Validators.required],
      SenderName: ['', [Validators.required, Validators.minLength(3)]],
      ReceiverName: ['', [Validators.required, Validators.minLength(3)]],
      DeliveryChallan: ['', Validators.required],
      Reference: ['', Validators.required],
      DeliveryDate: ['', Validators.required],
      CustomerNotes: [''],
      TermsConditions: ['']
    });
  }

  submitForm() {
    if (this.deliveryForm.valid) {
      console.log(this.deliveryForm.value);
    } else {
      this.deliveryForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

}


