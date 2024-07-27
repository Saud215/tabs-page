const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        const { company } = item;
        return (
          <button
            key={item.id}
            type="button"
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => {
              setCurrentItem(index);
            }}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
