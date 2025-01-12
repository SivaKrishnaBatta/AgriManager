import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-shipments-add',
  templateUrl: './shipments-add.component.html',
  styleUrls: ['./shipments-add.component.scss']
})
export class ShipmentsAddComponent {
   contactForm: any;
    submited = false
    showmessage = false;
    constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.contactForm = this.fb.group({
        CargoId : ['', [Validators.required]],
        PackageId: ['',[Validators.required]],
       ShipmentDate: ['', [Validators.required]],
       Tracking:    [''],
       Carrier:     ['',[Validators.required]],
       ShippingCharges: ['',[Validators.required]],
       TrackingUrl: [''],
        Note: [''],
        message: [''],
        id:     [0],
      });
    }
    sendMail() {
      if (this.contactForm.valid) {
        console.log(this.contactForm.value);
       
      } else {
        this.contactForm.markAllAsTouched();
        console.log('Form is invalid');
      }
    }
    resetform() {
      this.contactForm.formreset()
    }
  

}
