const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      onClick={onSelect}
      className="p-4 mb-4 w-100 rounded flex justify-between items-center mx-auto bg-blue-950 cursor-pointer hover:bg-blue-900"
    >
      <div>
        <p className="font-bold text-xl">{name}</p>
        <p className="font-semibold text-sm text-white-600">
          Buy {quantity} in {category}
        </p>
      </div>
    </li>
  );
};

export default Item;
