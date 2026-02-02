import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private baseUrl = 'https://localhost:7051/api/fields';

  constructor(private http: HttpClient) {}

  getFields() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getFieldById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createField(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  updateField(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteField(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
