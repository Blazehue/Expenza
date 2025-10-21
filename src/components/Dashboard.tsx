"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense, Category } from "@/types/expense";
import { DollarSign, TrendingUp, AlertCircle } from "lucide-react";

interface DashboardProps {
  expenses: Expense[];
  categories: Category[];
  overallBudget: number;
}

export function Dashboard({ expenses, categories, overallBudget }: DashboardProps) {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remainingBudget = overallBudget - totalExpenses;
  
  const categoryExpenses = expenses.reduce((acc, exp) => {
    acc[exp.categoryId] = (acc[exp.categoryId] || 0) + exp.amount;
    return acc;
  }, {} as Record<string, number>);

  const topCategoryId = Object.entries(categoryExpenses).sort(
    ([, a], [, b]) => b - a
  )[0]?.[0];
  
  const topCategory = categories.find((c) => c.id === topCategoryId);
  const topCategoryAmount = categoryExpenses[topCategoryId] || 0;

  const budgetPercentage = overallBudget > 0 ? (totalExpenses / overallBudget) * 100 : 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {expenses.length} transaction{expenses.length !== 1 ? "s" : ""}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Remaining Budget</CardTitle>
          {budgetPercentage >= 80 && <AlertCircle className="h-4 w-4 text-destructive" />}
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${remainingBudget < 0 ? 'text-destructive' : ''}`}>
            ${remainingBudget.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {budgetPercentage.toFixed(1)}% of budget used
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Category</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex items-center gap-2">
            {topCategory ? (
              <>
                <span>{topCategory.icon}</span>
                <span>${topCategoryAmount.toFixed(2)}</span>
              </>
            ) : (
              <span>N/A</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {topCategory?.name || "No expenses yet"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
