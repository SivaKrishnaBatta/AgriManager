import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../auth/backend-port';
@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getIncomes() {
    return this.http.get<any[]>(this.baseUrl+'api/income');
  }

  getIncomeById(id: number) {
    return this.http.get<any>(`${this.baseUrl}api/income/${id}`);
  }

  createIncome(data: any) {
    return this.http.post(this.baseUrl+'api/income', data);
  }

  updateIncome(id: number, data: any) {
    return this.http.put(`${this.baseUrl}api/income/${id}`, data);
  }

  deleteIncome(id: number) {
    return this.http.delete(`${this.baseUrl}api/income/${id}`);
  }
}