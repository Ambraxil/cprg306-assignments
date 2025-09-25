import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>Category: {category}</p>
      </div>
      <span>Qty: {quantity}</span>
    </li>
  );
};

export default Item;