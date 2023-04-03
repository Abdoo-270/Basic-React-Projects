import Person from "./Person";
const List = ({ people }) => {
  return (
    <>
      {people.map((item) => {
        return <Person key={item.id} {...item} />;
      })}
    </>
  );
};
export default List;
