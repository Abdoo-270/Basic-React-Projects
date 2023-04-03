import Title from "./Title";
import data from "./data";
import { useState } from "react";
import NavButtons from "./NavButtons";
import MenuItems from "./MenuItems";

const App = () => {
  const [selectedCategory, setselectedCategory] = useState("");
  const categoryNames = data.map((item) => {
    return item.category;
  });
  const uniquecategoryNames = categoryNames.filter((number, index) => {
    return categoryNames.indexOf(number) === index;
  });

  const [categoryNamesList, setCategoryNamesList] = useState([
    "all",
    ...uniquecategoryNames,
  ]);

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <NavButtons
          categoryNamesList={categoryNamesList}
          setselectedCategory={setselectedCategory}
        />
        <MenuItems selectedCategory={selectedCategory} />
      </section>
    </main>
  );
};
export default App;
