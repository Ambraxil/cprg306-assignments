'use client';

import Item from "./item";
import { useState } from "react";
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
  if (sortBy === "name") {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  } 
  else if (sortBy === "category") {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return 0;
  } 
  else {
    return 0;
  }
  });

  const groupedItems = items.reduce((groups, item) => {
  const category = item.category;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(item);
  return groups;
  }, {});
  
  return (
    <div className="max-w-xl mx-auto mt-6">
      <div className="flex flex-wrap gap-2 mb-4 justify-center h-15 text-xl">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (
        <div className="space-y-6">
          {Object.keys(groupedItems).map((category) => (
            <div key={category} className="rounded p-4 bg-blue-900">
              <h2 className="text-xl font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul>
                {groupedItems[category].map((item, index) => (
                  <Item
                    key={`${category}-${index}`}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
