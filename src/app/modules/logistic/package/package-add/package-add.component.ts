import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { id } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss']
})
export class PackageAddComponent {
  packageForm: any;
  
    constructor(private formBuilder: FormBuilder) {}
    ngOnInit(): void {
      this.packageForm = this.formBuilder.group({
        CargoId: ['', Validators.required],
        PackageSlip: ['', Validators.required],
        SenderName : ['', Validators.required],
        ReceiverName : ['', Validators.required],
        PackageDate: ['', Validators.required],
        Description: ['', [Validators.required, Validators.maxLength(200)]],
        Comment:     ['', [Validators.required, Validators.maxLength(200)]],
        Status:     ['', [Validators.required, Validators.maxLength(200)]],
       id: [0],
  
      });
    }
  
    submitForm() {
      if (this.packageForm.valid) {
        console.log(this.packageForm.value);
        // Handle form submission logic here
      } else {
       this.packageForm.markAllAsTouched();
          console.log('Form is invalid');
        }
       
      }

}
