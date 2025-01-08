import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryStateCityComponent } from './country-state-city.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CountryStateCityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CountryStateCityComponent] 
})
export class CountryStateCityModule { }
