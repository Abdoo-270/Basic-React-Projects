import data from "./data";
import { useState } from "react";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birtday today </h3>
        <List people={people} />
        <button
          className="btn btn-block"
          type="button"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
