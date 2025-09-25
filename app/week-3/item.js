import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 mb-4 w-100 rounded shadow-sm flex justify-between items-center mx-auto bg-blue-950">
      <div>
        <p className="font-bold text-xl">{name}</p>
        <p className="font-semibold text-sm text-white-600">Buy {quantity} in {category}</p>
      </div>
    </li>
  );
};

export default Item;
