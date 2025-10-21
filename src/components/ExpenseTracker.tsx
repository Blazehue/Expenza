"use client";

import { useState, useEffect } from "react";
import { Expense, Category, Budget, DEFAULT_CATEGORIES } from "@/types/expense";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExpenseForm } from "./ExpenseForm";
import { Dashboard } from "./Dashboard";
import { ExpenseList } from "./ExpenseList";
import { BudgetSettings } from "./BudgetSettings";
import { Analytics } from "./Analytics";
import { CategoryManager } from "./CategoryManager";
import { ExportImport } from "./ExportImport";
import { LoadingScreen } from "./LoadingScreen";
import { ThemeToggle } from "./ThemeToggle";
import { Plus, BarChart3, Settings, FolderOpen, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ExpenseTracker() {
  const [showLoading, setShowLoading] = useState(true);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>(DEFAULT_CATEGORIES);
  const [overallBudget, setOverallBudget] = useState<number>(5000);
  const [categoryBudgets, setCategoryBudgets] = useState<Budget[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    const savedCategories = localStorage.getItem("categories");
    const savedOverallBudget = localStorage.getItem("overallBudget");
    const savedCategoryBudgets = localStorage.getItem("categoryBudgets");

    if (savedExpenses) {
      const parsed = JSON.parse(savedExpenses);
      setExpenses(
        parsed.map((exp: any) => ({
          ...exp,
          date: new Date(exp.date),
          createdAt: new Date(exp.createdAt),
        }))
      );
    }
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
    if (savedOverallBudget) {
      setOverallBudget(parseFloat(savedOverallBudget));
    }
    if (savedCategoryBudgets) {
      setCategoryBudgets(JSON.parse(savedCategoryBudgets));
    }

    setIsLoaded(true);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("overallBudget", overallBudget.toString());
    }
  }, [overallBudget, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("categoryBudgets", JSON.stringify(categoryBudgets));
    }
  }, [categoryBudgets, isLoaded]);

  const handleAddExpense = (expense: Omit<Expense, "id" | "createdAt">) => {
    const newExpense: Expense = {
      ...expense,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    setExpenses([newExpense, ...expenses]);
    setIsAddDialogOpen(false);
  };

  const handleEditExpense = (expense: Omit<Expense, "id" | "createdAt">) => {
    if (!editingExpense) return;
    
    setExpenses(
      expenses.map((exp) =>
        exp.id === editingExpense.id
          ? { ...exp, ...expense }
          : exp
      )
    );
    setEditingExpense(null);
  };

  const handleDeleteExpense = (id: string) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      setExpenses(expenses.filter((exp) => exp.id !== id));
    }
  };

  const handleSaveBudgets = (overall: number, budgets: Budget[]) => {
    setOverallBudget(overall);
    setCategoryBudgets(budgets);
  };

  const handleAddCategory = (category: Omit<Category, "id">) => {
    const newCategory: Category = {
      ...category,
      id: Math.random().toString(36).substr(2, 9),
    };
    setCategories([...categories, newCategory]);
  };

  const handleDeleteCategory = (id: string) => {
    const hasExpenses = expenses.some((exp) => exp.categoryId === id);
    if (hasExpenses) {
      alert("Cannot delete category with existing expenses");
      return;
    }
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
      setCategoryBudgets(categoryBudgets.filter((b) => b.categoryId !== id));
    }
  };

  const handleImport = (data: {
    expenses: Expense[];
    categories: Category[];
    categoryBudgets: Budget[];
    overallBudget: number;
  }) => {
    if (confirm("This will replace all existing data. Continue?")) {
      setExpenses(data.expenses);
      setCategories(data.categories);
      setCategoryBudgets(data.categoryBudgets);
      setOverallBudget(data.overallBudget);
    }
  };

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Expenza
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage your finances with ease
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="shadow-lg">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Expense
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                  </DialogHeader>
                  <ExpenseForm
                    categories={categories}
                    onSubmit={handleAddExpense}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="mb-8">
          <Dashboard
            expenses={expenses}
            categories={categories}
            overallBudget={overallBudget}
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="expenses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto">
            <TabsTrigger value="expenses" className="gap-2">
              <FolderOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Expenses</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Budget</span>
            </TabsTrigger>
            <TabsTrigger value="categories" className="gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Categories</span>
            </TabsTrigger>
            <TabsTrigger value="export" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="expenses" className="space-y-4">
            <Card className="p-6">
              <ExpenseList
                expenses={expenses}
                categories={categories}
                onEdit={(expense) => setEditingExpense(expense)}
                onDelete={handleDeleteExpense}
              />
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Analytics expenses={expenses} categories={categories} />
          </TabsContent>

          <TabsContent value="budget" className="space-y-4">
            <BudgetSettings
              categories={categories}
              expenses={expenses}
              overallBudget={overallBudget}
              categoryBudgets={categoryBudgets}
              onSaveBudgets={handleSaveBudgets}
            />
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <CategoryManager
              categories={categories}
              onAddCategory={handleAddCategory}
              onDeleteCategory={handleDeleteCategory}
            />
          </TabsContent>

          <TabsContent value="export" className="space-y-4">
            <ExportImport
              expenses={expenses}
              categories={categories}
              categoryBudgets={categoryBudgets}
              overallBudget={overallBudget}
              onImport={handleImport}
            />
          </TabsContent>
        </Tabs>

        {/* Edit Dialog */}
        <Dialog open={!!editingExpense} onOpenChange={() => setEditingExpense(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Expense</DialogTitle>
            </DialogHeader>
            {editingExpense && (
              <ExpenseForm
                categories={categories}
                onSubmit={handleEditExpense}
                initialData={editingExpense}
                onCancel={() => setEditingExpense(null)}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}