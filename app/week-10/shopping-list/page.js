"use client";

import { useState, useEffect } from "react";
import ItemList from "./items-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (!user) return;
    const data = await getItems(user.uid);
    setItems(data);
  };

    if (!user) {
    return (
      <div>
        <h1>Secured Page</h1>
        <p>Please sign in to access the shopping list features.</p>
      </div>
    );
  }
  
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    const itemWithId = { ...newItem, id };

    setItems((prev) => [...prev, itemWithId]);
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
