import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-deliver',
  templateUrl: './add-deliver.component.html',
  styleUrls: ['./add-deliver.component.scss']
})
export class AddDeliverComponent {
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
