"use client";

import { useState } from "react";
import ItemList from "./items-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleaned = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N} ]/gu, "")
      .trim();

    setSelectedItemName(cleaned);
  };

  return (
    <div className="min-h-screen bg-black-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </div>
  );
}
