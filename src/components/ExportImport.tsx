"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expense, Category, Budget } from "@/types/expense";
import { Download, Upload } from "lucide-react";
import { useRef } from "react";
import { format } from "date-fns";

interface ExportImportProps {
  expenses: Expense[];
  categories: Category[];
  categoryBudgets: Budget[];
  overallBudget: number;
  onImport: (data: {
    expenses: Expense[];
    categories: Category[];
    categoryBudgets: Budget[];
    overallBudget: number;
  }) => void;
}

export function ExportImport({
  expenses,
  categories,
  categoryBudgets,
  overallBudget,
  onImport,
}: ExportImportProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const exportToJSON = () => {
    const data = {
      expenses,
      categories,
      categoryBudgets,
      overallBudget,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `expenses-${format(new Date(), "yyyy-MM-dd")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    const headers = ["Date", "Description", "Category", "Amount"];
    const rows = expenses.map((expense) => {
      const category = categories.find((c) => c.id === expense.categoryId);
      return [
        format(new Date(expense.date), "yyyy-MM-dd"),
        expense.description,
        category?.name || "Unknown",
        expense.amount.toFixed(2),
      ];
    });

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `expenses-${format(new Date(), "yyyy-MM-dd")}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);

        // Validate the data structure
        if (
          !data.expenses ||
          !data.categories ||
          !Array.isArray(data.expenses) ||
          !Array.isArray(data.categories)
        ) {
          alert("Invalid file format");
          return;
        }

        // Convert date strings back to Date objects
        const expenses = data.expenses.map((exp: any) => ({
          ...exp,
          date: new Date(exp.date),
          createdAt: new Date(exp.createdAt),
        }));

        onImport({
          expenses,
          categories: data.categories,
          categoryBudgets: data.categoryBudgets || [],
          overallBudget: data.overallBudget || 0,
        });

        alert("Data imported successfully!");
      } catch (error) {
        alert("Error importing file. Please check the file format.");
        console.error(error);
      }
    };
    reader.readAsText(file);

    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Export & Import Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Export</h3>
          <div className="flex gap-2">
            <Button onClick={exportToJSON} variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Export JSON
            </Button>
            <Button onClick={exportToCSV} variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Export all your expense data, categories, and budgets
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Import</h3>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full"
          >
            <Upload className="h-4 w-4 mr-2" />
            Import JSON
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Import previously exported data (JSON format only)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
