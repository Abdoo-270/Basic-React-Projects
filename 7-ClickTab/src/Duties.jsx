import { FaAngleDoubleRight } from "react-icons/fa";
const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
