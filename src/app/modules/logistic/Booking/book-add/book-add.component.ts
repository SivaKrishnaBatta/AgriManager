import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent {
   myList: any[] = [];
    touched = false
  
  
    ngOnInit() {
      this.myList.push({
        component: "",
        Quantity: "",
        UnitofMeasure: ""
      })
      console.log(this.myList);
  
    }
  
    addbom() {
      this.myList.push({
        component: "",
        Quantity: "",
        UnitofMeasure: ""
      })
    }
    _delete(i: any) {
      this.myList.splice(i, 1)
    }
    registerForm: any;
    addNew: boolean | undefined;
  
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    createForm() {
      this.registerForm = this.fb.group({
        SenderFname: ['', Validators.required, Validators.minLength(2)],
        SenderLname: ['', [Validators.required]],
        SenderEmail: ['', [Validators.required]],
        SenderPhone: ['', [Validators.required]],
        SenderAddress1: ['', [Validators.required]],
        SenderAddress2: ['', [Validators.required]],
        SenderCity: ['', [Validators.required]],
        SenderState: ['', [Validators.required]],
        SenderPostcode: ['', [Validators.required]],
        SenderCountry: ['', [Validators.required]],
        ReceiverFname: ['', Validators.required, Validators.minLength(2)],
        ReceiverLname: ['', [Validators.required]],
        ReceiverEmail: ['', [Validators.required]],
        ReceiverPhone: ['', [Validators.required]],
        ReceiverAddress1: ['', [Validators.required]],
        ReceiverAddress2: ['', [Validators.required]],
        ReceiverCity: ['', [Validators.required]],
        ReceiverState: ['', [Validators.required]],
        ReceiverPostcode: ['', [Validators.required]],
        ReceiverCountry: ['', [Validators.required]],
        Date: ['', [Validators.required]],
        ExpectedDeliveryDate: ['', [Validators.required]],
        ServiceTax: [''],
        CreatedAt: ['', [Validators.required]],
        ModifiedBy: ['', [Validators.required]],
        TotalWeight: ['', [Validators.required]],
        ModifiedAt: ['', [Validators.required]],
        commodity: ['', [Validators.required]],
        Status: ['', [Validators.required]],
        Freight: ['', [Validators.required]],
        ShippingMethod: ['', [Validators.required]],
        RateKg: ['', [Validators.required]],
        // additionalCharges: ['', [Validators.required]],
        // additionalCharges: ['', [Validators.required]],
        id: [0],
      })
    }
  
    onSubmit() {
      console.log('Form Data:', this.registerForm.value);
      if (this.registerForm.valid) {
        console.log('Form Data:', this.registerForm.value);
        // Optionally, reset the form or close the add new view
        this.registerForm.reset();
        this.addNew = false; // Close the form after submission
      }
      else {
        this.registerForm.markAllAsTouched();
        this.touched=true
        console.log('Form is invalid');
      }
    }
  

}
