import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrier-performance-report',
  templateUrl: './carrier-performance-report.component.html',
  styleUrls: ['./carrier-performance-report.component.scss']
})
export class CarrierPerformanceReportComponent {
   CarrierPerformanceReport: any;
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit(): void {
      // Initialize the form with validation
      this.CarrierPerformanceReport = this.formBuilder.group({
        fromDate: ['', Validators.required],
        toDate: ['', Validators.required]
      });
    }
  
    // Optional submit method for custom actions
    submitReport() {
      if (this.CarrierPerformanceReport.valid) {
        console.log('Form Submitted', this.CarrierPerformanceReport.value);
        // Implement your form submission logic here
      } else {
        this.CarrierPerformanceReport.markAllAsTouched();
        console.log('Form is invalid');
      }
    }
  

}
