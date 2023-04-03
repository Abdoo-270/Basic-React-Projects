import SubmitForm from "./SubmitForm";
import ColorsMenu from "./ColorsMenu";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [colors, setColors] = useState(new Values("#e6e6e6").all(10));
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <SubmitForm addColor={addColor} />
      <ColorsMenu colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
