import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteItem = (id) => {
    const newList = data.filter((item) => {
      return item.id !== id;
    });
    setData(newList);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={data} deleteItem={deleteItem} />
    </main>
  );
};
export default App;
