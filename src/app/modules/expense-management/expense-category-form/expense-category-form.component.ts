import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-expense-category-form',
  templateUrl: './expense-category-form.component.html',
  styleUrls: ['./expense-category-form.component.scss']
})
export class ExpenseCategoryFormComponent implements OnInit {
  categoryForm!: FormGroup;
  isEdit = false;
  categoryId!: number;

  categories = [
    { id: 1, name: 'Seeds' },
    { id: 2, name: 'Fertilizers' }
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });

    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.categoryId) {
      this.isEdit = true;
      this.loadCategory(this.categoryId);
    }
  }

  loadCategory(id: number) {
    const category = this.categories.find(c => c.id === id);
    if (category) {
      this.categoryForm.patchValue({ name: category.name });
    }
  }

  save() {
    if (this.categoryForm.invalid) return;

    console.log(
      this.isEdit ? 'Update Category' : 'Create Category',
      this.categoryForm.value
    );

    this.router.navigate(['/agri/expenses/category']);
  }

  cancel() {
    this.router.navigate(['/agri/expenses/category']);
  }
}
