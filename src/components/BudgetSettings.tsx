"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Category, Budget, Expense } from "@/types/expense";
import { AlertCircle, TrendingUp } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BudgetSettingsProps {
  categories: Category[];
  expenses: Expense[];
  overallBudget: number;
  categoryBudgets: Budget[];
  onSaveBudgets: (overall: number, categoryBudgets: Budget[]) => void;
}

export function BudgetSettings({
  categories,
  expenses,
  overallBudget,
  categoryBudgets,
  onSaveBudgets,
}: BudgetSettingsProps) {
  const [localOverallBudget, setLocalOverallBudget] = useState(overallBudget.toString());
  const [localCategoryBudgets, setLocalCategoryBudgets] = useState<Record<string, string>>(
    categoryBudgets.reduce((acc, b) => ({ ...acc, [b.categoryId]: b.amount.toString() }), {})
  );

  useEffect(() => {
    setLocalOverallBudget(overallBudget.toString());
  }, [overallBudget]);

  const handleSave = () => {
    const budgets: Budget[] = categories
      .map((cat) => ({
        categoryId: cat.id,
        amount: parseFloat(localCategoryBudgets[cat.id] || "0"),
      }))
      .filter((b) => b.amount > 0);

    onSaveBudgets(parseFloat(localOverallBudget) || 0, budgets);
  };

  const getCategorySpending = (categoryId: string) => {
    return expenses
      .filter((e) => e.categoryId === categoryId)
      .reduce((sum, e) => sum + e.amount, 0);
  };

  const totalSpending = expenses.reduce((sum, e) => sum + e.amount, 0);
  const overallPercentage = overallBudget > 0 ? (totalSpending / overallBudget) * 100 : 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Overall Budget
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="overall-budget">Monthly Budget</Label>
            <Input
              id="overall-budget"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={localOverallBudget}
              onChange={(e) => setLocalOverallBudget(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Spent: ${totalSpending.toFixed(2)}</span>
              <span>Budget: ${overallBudget.toFixed(2)}</span>
            </div>
            <Progress 
              value={Math.min(overallPercentage, 100)} 
              className={overallPercentage >= 100 ? "bg-destructive/20" : overallPercentage >= 80 ? "bg-orange-200" : ""}
            />
            <div className="text-sm text-muted-foreground">
              {overallPercentage.toFixed(1)}% used
            </div>
          </div>

          {overallPercentage >= 100 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Budget exceeded by ${(totalSpending - overallBudget).toFixed(2)}
              </AlertDescription>
            </Alert>
          )}
          
          {overallPercentage >= 80 && overallPercentage < 100 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Warning: 80% of budget reached
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Category Budgets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => {
            const spent = getCategorySpending(category.id);
            const budget = parseFloat(localCategoryBudgets[category.id] || "0");
            const percentage = budget > 0 ? (spent / budget) * 100 : 0;

            return (
              <div key={category.id} className="space-y-2 pb-4 border-b last:border-0 last:pb-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  <Label htmlFor={`budget-${category.id}`} className="flex-1">
                    {category.name}
                  </Label>
                </div>
                <Input
                  id={`budget-${category.id}`}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={localCategoryBudgets[category.id] || ""}
                  onChange={(e) =>
                    setLocalCategoryBudgets({
                      ...localCategoryBudgets,
                      [category.id]: e.target.value,
                    })
                  }
                />
                {budget > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Spent: ${spent.toFixed(2)}</span>
                      <span>Budget: ${budget.toFixed(2)}</span>
                    </div>
                    <Progress 
                      value={Math.min(percentage, 100)}
                      className={percentage >= 100 ? "bg-destructive/20" : percentage >= 80 ? "bg-orange-200" : ""}
                    />
                    {percentage >= 100 && (
                      <p className="text-xs text-destructive">
                        Exceeded by ${(spent - budget).toFixed(2)}
                      </p>
                    )}
                    {percentage >= 80 && percentage < 100 && (
                      <p className="text-xs text-orange-600">
                        Warning: {percentage.toFixed(1)}% used
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">
        Save Budget Settings
      </Button>
    </div>
  );
}
