import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from 'src/app/models/crop.model';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  private baseUrl = 'https://localhost:7051/api';

  constructor(private http: HttpClient) {}

  getCrops(): Observable<Crop[]> {
    return this.http.get<Crop[]>(`${this.baseUrl}/crops`);
  }

  getCropById(id: number): Observable<Crop> {
    return this.http.get<Crop>(`${this.baseUrl}/crops/${id}`);
  }

  createCrop(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crops`, data);
  }

  updateCrop(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/crops/${id}`, data);
  }

  deleteCrop(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/crops/${id}`);
  }

  // dropdowns
  getFarms() {
    return this.http.get<any[]>(`${this.baseUrl}/farms`);
  }

  getFields() {
    return this.http.get<any[]>(`${this.baseUrl}/fields`);
  }

  getCropStatuses() {
    return this.http.get<any[]>(`${this.baseUrl}/crop-status/dropdown`);
  }
}
