import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseCategory } from '../../models/expense-category.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {

  private apiUrl = 'https://localhost:7051/api/expense-categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ExpenseCategory[]> {
    return this.http.get<ExpenseCategory[]>(this.apiUrl);
  }

  getById(id: number): Observable<ExpenseCategory> {
    return this.http.get<ExpenseCategory>(`${this.apiUrl}/${id}`);
  }

  create(payload: { categoryName: string }) {
    return this.http.post(this.apiUrl, payload);
  }

  update(id: number, payload: { categoryName: string }) {
    return this.http.put(`${this.apiUrl}/${id}`, payload);
  }

  toggleStatus(id: number) {
    return this.http.put(`${this.apiUrl}/${id}/toggle`, {});
  }
}
