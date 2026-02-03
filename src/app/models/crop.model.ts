export interface Crop {
  cropId?: number;
  farmId: number;
  farmName?: string;
  fieldId: number;
  fieldName?: string;
  cropName: string;
  cropStatusId: number;
  cropStatusName?: string;
  season?: string;
  startDate: string;           // yyyy-MM-dd
  expectedEndDate?: string;    // yyyy-MM-dd
  expectedYield?: string;
}
