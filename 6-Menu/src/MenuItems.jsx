import data from "./data";
import MenuItem from "./MenuItem";
const MenuItems = ({ selectedCategory }) => {
  const selectedMenu = data.filter((item) => {
    return item.category === selectedCategory;
  });

  if (selectedCategory === "all") {
    return (
      <div className="section-center">
        {data.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    );
  }
  return (
    <div className="section-center">
      {selectedMenu.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default MenuItems;
