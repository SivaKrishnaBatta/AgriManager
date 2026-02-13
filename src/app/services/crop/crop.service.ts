import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from 'src/app/models/crop.model';
import { environment } from '../auth/backend-port';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCrops(): Observable<Crop[]> {
    return this.http.get<Crop[]>(`${this.baseUrl}api/crops`);
  }

  getCropById(id: number): Observable<Crop> {
    return this.http.get<Crop>(`${this.baseUrl}api/crops/${id}`);
  }

  createCrop(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/crops`, data);
  }

  updateCrop(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/crops/${id}`, data);
  }

  deleteCrop(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/crops/${id}`);
  }

  // dropdowns
  getFarms() {
    return this.http.get<any[]>(`${this.baseUrl}api/farms`);
  }

  getFields() {
    return this.http.get<any[]>(`${this.baseUrl}api/fields`);
  }

  getCropStatuses() {
    return this.http.get<any[]>(`${this.baseUrl}api/crop-status/dropdown`);
  }
}
