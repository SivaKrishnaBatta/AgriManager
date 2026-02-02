import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
   profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: [''],
      address: [''],
      notes: ['']
    });

    // Static profile data (View + Edit)
    this.profileForm.patchValue({
      fullName: 'Siva Krishna',
      email: 'siva@gmail.com',
      mobile: '9876543210',
      address: 'Hyderabad, Telangana',
      notes: 'Primary account holder'
    });
  }

  updateProfile() {
    if (this.profileForm.invalid) return;
    console.log('Profile Updated', this.profileForm.value);
  }

}
