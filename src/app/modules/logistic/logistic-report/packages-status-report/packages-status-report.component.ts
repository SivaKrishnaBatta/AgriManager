import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-packages-status-report',
  templateUrl: './packages-status-report.component.html',
  styleUrls: ['./packages-status-report.component.scss']
})
export class PackagesStatusReportComponent {
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
