import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private baseUrl = 'https://localhost:7051/api/farms';

  constructor(private http: HttpClient) {}

  getFarms(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getFarmById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addFarm(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  updateFarm(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteFarm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

