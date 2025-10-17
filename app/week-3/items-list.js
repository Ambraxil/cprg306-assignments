import Item from './item';

import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
} from './items';

const ItemList = () => {
  const items = [
    item1, item2, item3, item4, item5, item6,
    item7, item8, item9, item10, item11, item12,
  ];

  return (
    <ul className="max-w-xl mx-auto mt-6">
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ItemList;