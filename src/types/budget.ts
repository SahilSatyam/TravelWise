export interface GroupExpense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
  date: string;
  category: ExpenseCategory;
  splitBetween: SplitMember[];
  splitType: 'equal' | 'percentage' | 'exact';
}

export interface SplitMember {
  userId: string;
  name: string;
  amount: number;
  percentage?: number;
}

export type ExpenseCategory = 'accommodation' | 'transport' | 'food' | 'activities' | 'shopping' | 'other';