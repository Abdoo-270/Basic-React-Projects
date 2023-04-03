import { useState } from "react";

const SubmitForm = ({ addColor }) => {
  const [colorValue, setColorValue] = useState("#e6e6e6");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(colorValue);
  };
  return (
    <section className="container">
      <h4>color generator</h4>

      <form className="color-form" onSubmit={handleSubmit}>
        <input
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          type="color"
        ></input>
        <input
          type="text"
          placeholder="#f15025"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        ></input>
        <button className="btn" type="submit">
          submit
        </button>
      </form>
    </section>
  );
};
export default SubmitForm;
