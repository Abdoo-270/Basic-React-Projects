import SubmitForm from "./SubmitForm";
import ColorsMenu from "./ColorsMenu";
import SingleColor from "./SingleColor";
import Title from "./Title";
import Values from "values.js";

const App = () => {
  const colors = new Values("#f15025").all(10);

  console.log(colors);
  return (
    <main>
      <Title text="color generator" />
      <SubmitForm />
    </main>
  );
};
export default App;
