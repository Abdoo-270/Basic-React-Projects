import { useState } from "react";
import { list } from "./data";
import Carousel from "./Carousel";
const App = () => {
  const [data, setData] = useState(list);
  const [index, setIndex] = useState(0);

  return (
    <main>
      <Carousel />
    </main>
  );
};
export default App;
