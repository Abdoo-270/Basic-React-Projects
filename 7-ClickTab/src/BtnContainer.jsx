const BtnContainer = ({ data, setCurrentCompany, currentItem }) => {
  const companies = data.map((item) => {
    return item.company;
  });
  const uniqueCompanies = companies.filter((item, index) => {
    return companies.indexOf(item) === index;
  });

  return (
    <div className="btn-container">
      {uniqueCompanies.map((companyName) => {
        return (
          <button
            className={
              currentItem.company === companyName
                ? "job-btn active-btn"
                : "job-btn"
            }
            type="button"
            onClick={() => setCurrentCompany(companyName)}
          >
            {companyName}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
