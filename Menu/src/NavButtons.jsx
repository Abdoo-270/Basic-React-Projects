import { useState } from "react";
const NavButtons = ({ categoryNamesList, setselectedCategory }) => {
  //const [selectedCategory, setselectedCategory] = useState("");
  return (
    <div className="btn-container">
      {categoryNamesList.map((item) => {
        return (
          <button
            type="button"
            className="btn"
            key={item}
            onClick={() => {
              setselectedCategory(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default NavButtons;
