"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Category } from "@/types/expense";
import { Plus, Trash2, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CategoryManagerProps {
  categories: Category[];
  onAddCategory: (category: Omit<Category, "id">) => void;
  onDeleteCategory: (id: string) => void;
}

const PRESET_COLORS = [
  "#ef4444", "#f59e0b", "#10b981", "#3b82f6", 
  "#8b5cf6", "#ec4899", "#06b6d4", "#6b7280"
];

const PRESET_ICONS = [
  "🍔", "🚗", "🛍️", "🎬", "📄", "⚕️", "📚", "💼",
  "🏠", "✈️", "🎮", "💪", "🐕", "☕", "🎵", "📱"
];

export function CategoryManager({
  categories,
  onAddCategory,
  onDeleteCategory,
}: CategoryManagerProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(PRESET_COLORS[0]);
  const [icon, setIcon] = useState(PRESET_ICONS[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddCategory({
      name: name.trim(),
      color,
      icon,
    });

    setName("");
    setColor(PRESET_COLORS[0]);
    setIcon(PRESET_ICONS[0]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category-name">Category Name</Label>
            <Input
              id="category-name"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Icon</Label>
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start text-2xl"
                onClick={() => setShowIconPicker(!showIconPicker)}
              >
                {icon}
              </Button>
              {showIconPicker && (
                <div className="grid grid-cols-8 gap-2 p-2 border rounded-md">
                  {PRESET_ICONS.map((i) => (
                    <button
                      key={i}
                      type="button"
                      className="text-2xl hover:bg-muted rounded p-1"
                      onClick={() => {
                        setIcon(i);
                        setShowIconPicker(false);
                      }}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Color</Label>
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start"
                onClick={() => setShowColorPicker(!showColorPicker)}
              >
                <div
                  className="w-4 h-4 rounded mr-2"
                  style={{ backgroundColor: color }}
                />
                {color}
              </Button>
              {showColorPicker && (
                <div className="grid grid-cols-4 gap-2 p-2 border rounded-md">
                  {PRESET_COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className="w-full h-8 rounded hover:opacity-80"
                      style={{ backgroundColor: c }}
                      onClick={() => {
                        setColor(c);
                        setShowColorPicker(false);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </form>

        <div className="space-y-2">
          <Label>Existing Categories</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.icon}</span>
                  <div>
                    <p className="font-medium">{category.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {category.color}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteCategory(category.id)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
