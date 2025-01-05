import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-country-state-city',
  templateUrl: './country-state-city.component.html',
  styleUrls: ['./country-state-city.component.scss']
})
export class CountryStateCityComponent {

  @Input() touched: any 

  address: any
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  selectedCountry: string = '';
  selectedState: string = '';
  selectedCity: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadCountries();
    this.address = this.fb.group({
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
    })
  }
  ngOnChanges(){
    if(this.touched){
      this.makeAllAsTouched()
    }
  }
  makeAllAsTouched() {
    this.address.markAllAsTouched();
  }





  loadCountries() {
    this.countries = Country.getAllCountries();
  }
  loadStates(countryCode: string) {
    this.states = State.getStatesOfCountry(countryCode);
  }
  loadCities(stateCode: string) {
    this.cities = City.getCitiesOfState(this.selectedCountry, stateCode);
  }
  onCountryChange(event: any) {
    this.selectedCountry = event.target.value;
    this.loadStates(this.selectedCountry);
    this.cities = [];
  }
  onStateChange(event: any) {
    this.selectedState = event.target.value;
    this.loadCities(this.selectedState);
  }
  onCityChange(event: any) {
    this.selectedCity = event.target.value;
  }
}
