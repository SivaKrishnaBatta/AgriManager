import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../auth/backend-port';

@Injectable({
  providedIn: 'root' 
})
export class FarmService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFarms(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'api/farms');
  }

  getFarmById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/farms/${id}`);
  }

  addFarm(data: any): Observable<any> {
    return this.http.post(this.baseUrl+'api/farms', data);
  }

  updateFarm(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/farms/${id}`, data);
  }

  deleteFarm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/farms/${id}`);
  }
}

