import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseCategoryService } from 'src/app/services/expanse-categorie/expanse-categorie.service';

@Component({
  selector: 'app-expense-category-form',
  templateUrl: './expense-category-form.component.html',
  styleUrls: ['./expense-category-form.component.scss']
})
export class ExpenseCategoryFormComponent implements OnInit {

  categoryForm!: FormGroup;
  isEdit = false;
  categoryId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: ExpenseCategoryService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });

    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.categoryId) {
      this.isEdit = true;
      this.loadCategory(this.categoryId);
    }
  }

  loadCategory(id: number) {
    this.categoryService.getById(id).subscribe(res => {
      this.categoryForm.patchValue({
        categoryName: res.categoryName
      });
    });
  }

  save() {
    if (this.categoryForm.invalid) return;

    const payload = {
      categoryName: this.categoryForm.value.categoryName
    };

    if (this.isEdit) {
      this.categoryService.update(this.categoryId, payload)
        .subscribe(() => {
          this.router.navigate(['/agri/expenses/category']);
        });
    } else {
      this.categoryService.create(payload)
        .subscribe(() => {
          this.router.navigate(['/agri/expenses/category']);
        });
    }
  }

  cancel() {
    this.router.navigate(['/agri/expenses/category']);
  }
}
