import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.scss']
})
export class ExpenseCategoriesComponent {
  constructor(private router: Router) {}
   categories = [
    { id: 1, name: 'Seeds', enabled: true },
    { id: 2, name: 'Fertilizers', enabled: true },
    { id: 3, name: 'Pesticides', enabled: true },
    { id: 4, name: 'Labor', enabled: true },
    { id: 5, name: 'Irrigation', enabled: true },
    { id: 6, name: 'Machinery', enabled: false },
    { id: 7, name: 'Others', enabled: true }
  ];

  addCategory() {
    this.router.navigate(['/agri/expenses/categories/add']);
  }

  editCategory(id: number) {
    this.router.navigate(['/agri/expenses/categories/edit', id]);
  }

  toggleStatus(category: any) {
    category.enabled = !category.enabled;
  }

}
