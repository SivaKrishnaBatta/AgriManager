import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  registerForm:any;
  addNew: boolean | undefined;
 

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      FirstName: ['', Validators.required,Validators.minLength(2)],
      Last_name: [''],
      email: ['', [Validators.required, Validators.minLength(2)]],
      Password: ['', [Validators.required, Validators.minLength(2)]],
      Title: ['', [Validators.required, Validators.minLength(2)]],
      Username: ['', [Validators.required, Validators.minLength(2)]],
      Mobilenumber: ['', [Validators.required, Validators.minLength(2)]],
      Address1: [''],
      Address2: [''],
      City: [''],
      State: [''],
      Postcode: [''],
      Country: [''],
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
  }
  
} 




