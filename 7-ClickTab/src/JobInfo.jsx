import Duties from "./Duties";
const JobInfo = ({ data, currentItem, currentCompany, setCurrentItem }) => {
  const newCurrentItem = data.filter((item) => {
    return item.company === currentCompany;
  });
  setCurrentItem(newCurrentItem[0]);
  const { title, company, dates, duties } = currentItem;
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
