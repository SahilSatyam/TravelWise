export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  expenses: Expense[];
  activities: Activity[];
}

export interface Expense {
  id: string;
  category: 'accommodation' | 'transport' | 'food' | 'activities' | 'other';
  amount: number;
  description: string;
  date: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  cost: number;
  location: string;
  notes?: string;
}

export interface BudgetSummary {
  total: number;
  spent: number;
  remaining: number;
  byCategory: Record<string, number>;
}