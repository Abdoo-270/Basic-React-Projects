import { nanoid } from "nanoid";
import Item from "./Item";
const ItemsList = ({ list, deletItem, editItem }) => {
  return (
    <div className="items">
      {list.map((item) => {
        return (
          <Item
            list={list}
            key={item.id}
            item={item}
            deletItem={deletItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default ItemsList;
