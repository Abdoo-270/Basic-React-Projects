import { useEffect } from "react";

const Item = ({ item, deletItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        onChange={() => editItem(item.id)}
        checked={item.completed}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deletItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default Item;
