import data from "./data";
import { nanoid } from "nanoid";
const Text = ({ paraNo }) => {
  const text = data.slice(0, paraNo);
  return (
    <article className="lorem-text">
      {text.map((item) => {
        return <p key={nanoid()}>{item}</p>;
      })}
    </article>
  );
};
export default Text;
