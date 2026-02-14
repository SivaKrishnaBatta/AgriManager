import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../auth/backend-port';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFields() {
    return this.http.get<any[]>(this.baseUrl+'api/fields');
  }

  getFieldById(id: number) {
    return this.http.get<any>(`${this.baseUrl}api/fields/${id}`);
  }

  createField(data: any) {
    return this.http.post(this.baseUrl+'api/fields', data);
  }

  updateField(id: number, data: any) {
    return this.http.put(`${this.baseUrl}api/fields/${id}`, data);
  }

  deleteField(id: number) {
    return this.http.delete(`${this.baseUrl}api/fields/${id}`);
  }
}
