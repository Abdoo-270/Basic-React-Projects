import { useEffect } from "react";
import { useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [currentCompany, setCurrentCompany] = useState("TOMMY");
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setCurrentItem(jsonData[0]);
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
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        data={data}
        setCurrentCompany={setCurrentCompany}
        currentItem={currentItem}
      />
      <JobInfo
        data={data}
        currentCompany={currentCompany}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </section>
  );
};
export default App;
