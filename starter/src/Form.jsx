import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ setList, list }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const itemObject = {
        name: inputValue,
        completed: false,
        id: new Date().getTime().toString(),
      };
      setList([itemObject, ...list]);
    }
    setInputValue("");
    toast.success("item added succesfully");
  };
  localStorage.setItem("list", JSON.stringify(list));

  return (
    <form onSubmit={handleSubmit}>
      <h4>Todo List App</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          submit
        </button>
      </div>
    </form>
  );
};

export default Form;
