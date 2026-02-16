export interface Income {
  incomeId?: number;        // optional (for edit/view)
  cropId: number;           // selected crop id
  cropName?: string;        // optional (for display)
  quantity: number;     // Quantity Sold
  pricePerUnit: number;  
  totalAmount: number;    // calculated as quantity * pricePerUnit  
  saleDate: string;         // dd-mm-yyyy or ISO string
  notes?: string;           // optional notes
}

