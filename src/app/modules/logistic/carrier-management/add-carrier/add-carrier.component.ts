import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.scss']
})
export class AddCarrierComponent {
  carrierForm: any;
  
    constructor(private formBuilder: FormBuilder) {}
  
  
    ngOnInit(): void {
      this.carrierForm = this.formBuilder.group({
        carrierCode: ['', [Validators.required, Validators.minLength(3)]],
        carrierName: ['', Validators.required],
        serviceType: ['', Validators.required],
        contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],  // 10-digit number pattern
        email: ['', [Validators.email]],
        status: ['', Validators.required],
        id:  [0],
        Address1: [''],
        Address2: [''],
        City: [''],
        State: [''],
        Postcode: [''],
        Country: [''],
      });
    }
  
    submitForm() {
      if (this.carrierForm.valid) {
        console.log(this.carrierForm.value);
       
      } else {
        this.carrierForm.markAllAsTouched();
        console.log('Form is invalid');
      }
  
        
      }
  

}
