"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Expense } from "@/types/expense";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

interface ExpenseFormProps {
  categories: Category[];
  onSubmit: (expense: Omit<Expense, "id" | "createdAt">) => void;
  initialData?: Expense;
  onCancel?: () => void;
}

export function ExpenseForm({
  categories,
  onSubmit,
  initialData,
  onCancel,
}: ExpenseFormProps) {
  const [amount, setAmount] = useState(initialData?.amount?.toString() || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || "");
  const [date, setDate] = useState<Date>(initialData?.date || new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description || !categoryId) return;

    onSubmit({
      amount: parseFloat(amount),
      description,
      categoryId,
      date,
    });

    if (!initialData) {
      setAmount("");
      setDescription("");
      setCategoryId("");
      setDate(new Date());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={categoryId} onValueChange={setCategoryId} required>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => d && setDate(d)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex gap-2">
        <Button type="submit" className="flex-1">
          {initialData ? "Update" : "Add"} Expense
        </Button>
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
