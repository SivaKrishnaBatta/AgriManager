import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-delivery-note-summary-report',
  templateUrl: './delivery-note-summary-report.component.html',
  styleUrls: ['./delivery-note-summary-report.component.scss']
})
export class DeliveryNoteSummaryReportComponent {
  deliveryNoteForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with validation
    this.deliveryNoteForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  // Optional submit method for custom actions
  submitReport() {
    if (this.deliveryNoteForm.valid) {
      console.log('Form Submitted', this.deliveryNoteForm.value);
      // Implement your form submission logic here
    } else {
      this.deliveryNoteForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}