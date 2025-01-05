import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-package-status-report',
  templateUrl: './package-status-report.component.html',
  styleUrls: ['./package-status-report.component.scss']
})
export class PackageStatusReportComponent {
  statusReportForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Create the form group and add validation rules
    this.statusReportForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }


  submitReport() {
    if (this.statusReportForm.valid) {
      console.log('Form Submitted', this.statusReportForm.value);
      // Implement your logic to handle form data
    } else {
      this.statusReportForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}