import { useState } from "react";
import people from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previos = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const random = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setIndex(randomIndex);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img width="100" src={people[index].image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{people[index].name}</h4>
        <p className="job">{people[index].job}</p>
        <p className="info">{people[index].text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={() => previos()}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={() => next()}>
            <FaChevronRight />
          </button>
        </div>
        <button type="button" className="btn" onClick={() => random()}>
          random
        </button>
      </article>
    </main>
  );
};
export default App;
