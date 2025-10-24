'use client';

import { useState } from 'react';

function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const increment = () => {
    if (quantity < 20) setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white mb-6">
      <div className="mb-4 text-black">
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Item Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center">
          <h2 className="border px-4.5 py-0.75 mr-1 rounded text-xl text-black font-semibold">
            {quantity}
          </h2>
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="mx-2 px-3 py-1 text-xl rounded bg-blue-500 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="mx-2 px-3 py-1 text-xl rounded bg-blue-500 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="p-2 border rounded flex-1 text-black border-gray-500"
        >
          {[
            "Produce",
            "Dairy",
            "Bakery",
            "Meat",
            "Frozen Foods",
            "Canned Goods",
            "Dry Goods",
            "Beverages",
            "Snacks",
            "Household",
            "Other"
          ].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}

export default NewItem;
