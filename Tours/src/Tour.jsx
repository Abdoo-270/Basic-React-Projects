import { useState } from "react";

const Tour = ({ tour, deleteItem }) => {
  const [fullText, setFullText] = useState(false);
  const { name, info, image, price, id } = tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {fullText ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            type="button"
            onClick={() => {
              if (fullText) {
                setFullText(false);
              } else {
                setFullText(true);
              }
            }}
          >
            {fullText ? "show less" : "show more"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          type="button"
          onClick={() => deleteItem(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
