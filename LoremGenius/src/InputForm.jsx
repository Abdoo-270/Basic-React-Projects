import { useEffect, useState } from "react";

const InputForm = ({ setParaNum }) => {
  const [inputValue, setInputValue] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setParaNum(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="lorem-form">
      <label>Paragraphs:</label>
      <input
        type="number"
        min="1"
        max="8"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        className="btn"
        type="submit"
        onClick={() => setParaNum(inputValue)}
      >
        Generate
      </button>
    </form>
  );
};
export default InputForm;
