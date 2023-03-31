import Title from "./Title";
import InputForm from "./InputForm";
import Text from "./Text";
import { useState } from "react";
const App = () => {
  const [paraNo, setParaNum] = useState(1);
  return (
    <section className="section-center">
      <Title />
      <InputForm setParaNum={setParaNum} />
      <Text paraNo={paraNo} />
    </section>
  );
};
export default App;
