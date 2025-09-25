import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Shopping List</h1>
      <ItemList />
    </div>
  );
};

export default Page;
