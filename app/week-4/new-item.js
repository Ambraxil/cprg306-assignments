'use client';

import { useState } from 'react';

function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
    if (quantity < 20) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

    return (
    <div className="mx-auto my-4 transform bg-white w-45 h-13 flex items-center justify-center">
      <h2 className="border px-4.5 py-0.75 mr-1 rounded text-xl text-black font-semibold"> {quantity}</h2>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`mx-2 px-3 py-1 text-xl rounded extrabold
                    bg-blue-500 text-white
                    hover:bg-blue-700
                    disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`mx-2 px-3 py-1 text-xl rounded extrabold
                    bg-blue-500 text-white
                    hover:bg-blue-700
                    disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        +
      </button>
    </div>
  );
};

export default NewItem;