import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendConnectionService } from 'src/app/services/backendConnection/backend-connection.service';

@Component({
  selector: 'app-freight-shipping-method',
  templateUrl: './freight-shipping-method.component.html',
  styleUrls: ['./freight-shipping-method.component.scss']
})
export class FreightShippingMethodComponent {
  addNew = false
  registerForm: any;
  allShippingMethod: any;

  constructor(
    private fb: FormBuilder,
    private http: BackendConnectionService
  ) {
    this.registerForm = this.fb.group({
      id: [0],
      shipmentMethod: ['', Validators.required],
      charges: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.addNew = false
    this.http.getapi('api/Freight/GetAllShipmentMethods').subscribe((res) => {
      if (res.status) {
        this.allShippingMethod = res.data
      }
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      if (this.registerForm.value.id == 0) {
        this.http.postapi('api/Freight/AddShipmentMethod', this.registerForm.value).subscribe((res) => {
          if (res.status) {
            this.ngOnInit()
          }
        });
      }
      else if (this.registerForm.value.id > 0) {
        this.http.putapi('api/Freight/EditShipmentMethod', this.registerForm.value).subscribe((res) => {
          if (res.status) {
            this.ngOnInit()
          }
        });
      }
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
  updateShipMethod(obj:any){
    console.log(obj);
    this.registerForm.patchValue(obj)
    this.addNew = true
  }
  close(){
    this.registerForm.reset();
    this.addNew = false
  }
}



