import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense.model';
import { environment } from '../auth/backend-port';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.baseUrl+'api/expenses');
  }

  getById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.baseUrl}api/expenses/${id}`);
  }

  create(payload: any) {
    return this.http.post(this.baseUrl+'api/expenses', payload);
  }

  update(id: number, payload: any) {
    return this.http.put(`${this.baseUrl}api/expenses/${id}`, payload);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}api/expenses/${id}`);
  }
}
