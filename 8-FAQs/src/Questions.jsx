import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>FAQ</h1>
      {questions.map((item) => {
        return <SingleQuestion key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Questions;
