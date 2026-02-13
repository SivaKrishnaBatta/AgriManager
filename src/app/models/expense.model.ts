export interface Expense {
  expenseId: number;
  cropId: number;
  cropName: string;
  categoryId: number;
  categoryName: string;
  amount: number;
  expenseDate: string; // ISO string
  notes?: string;
}
