'use client';

import { useState } from 'react';
import ItemList from './items-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="min-h-screen bg-black-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default Page;
