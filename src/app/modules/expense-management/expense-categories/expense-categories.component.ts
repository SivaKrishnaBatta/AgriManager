import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseCategory } from 'src/app/models/expense-category.model';
import { ExpenseCategoryService } from 'src/app/services/expanse-categorie/expanse-categorie.service';

@Component({
  selector: 'app-expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrls: ['./expense-categories.component.scss']
})
export class ExpenseCategoriesComponent implements OnInit {

  categories: ExpenseCategory[] = [];

  constructor(
    private router: Router,
    private categoryService: ExpenseCategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe((res:any) => {
      this.categories = res.data;
    });
  }

  addCategory() {
    this.router.navigate(['/agri/expenses/categories/add']);
  }

  editCategory(id: number) {
    this.router.navigate(['/agri/expenses/categories/edit', id]);
  }

  toggleStatus(category: ExpenseCategory) {
    this.categoryService.toggleStatus(category.categoryId)
      .subscribe(() => {
        category.isActive = !category.isActive;
      });
  }
}
