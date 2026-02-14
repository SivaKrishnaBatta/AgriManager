import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseCategory } from '../../models/expense-category.model';
import { environment } from '../auth/backend-port';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ExpenseCategory[]> {
    return this.http.get<ExpenseCategory[]>(this.baseUrl+'api/expense-categories');
  }

  getById(id: number): Observable<ExpenseCategory> {
    return this.http.get<ExpenseCategory>(`${this.baseUrl}api/expense-categories/${id}`);
  }

  create(payload: { categoryName: string }) {
    return this.http.post(this.baseUrl+'api/expense-categories', payload);
  }

  update(id: number, payload: { categoryName: string }) {
    return this.http.put(`${this.baseUrl}api/expense-categories/${id}`, payload);
  }

  toggleStatus(id: number) {
    return this.http.put(`${this.baseUrl}api/expense-categories/${id}/toggle`, {});
  }
}
