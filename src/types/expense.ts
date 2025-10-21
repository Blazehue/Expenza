export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface Expense {
  id: string;
  amount: number;
  description: string;
  categoryId: string;
  date: Date;
  createdAt: Date;
}

export interface Budget {
  categoryId: string;
  amount: number;
}

export interface CategoryBudget {
  overall: number;
  categories: Budget[];
}

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'food', name: 'Food & Dining', color: '#ef4444', icon: '🍔' },
  { id: 'transport', name: 'Transportation', color: '#3b82f6', icon: '🚗' },
  { id: 'shopping', name: 'Shopping', color: '#ec4899', icon: '🛍️' },
  { id: 'entertainment', name: 'Entertainment', color: '#8b5cf6', icon: '🎬' },
  { id: 'bills', name: 'Bills & Utilities', color: '#f59e0b', icon: '📄' },
  { id: 'healthcare', name: 'Healthcare', color: '#10b981', icon: '⚕️' },
  { id: 'education', name: 'Education', color: '#06b6d4', icon: '📚' },
  { id: 'other', name: 'Other', color: '#6b7280', icon: '💼' },
];
