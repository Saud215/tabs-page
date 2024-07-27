import { useEffect, useState } from "react";
import data from "./data";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = () => {
    // const response = await fetch(url);
    // const newJobs = await response.json();
    // setJobs(data);
    // setIsLoading(false);
  };
  // useEffect(() => {
  //   fetchJobs();
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      // console.log(
      //   "hello from setinterval and get ready for just one more render"
      // );
      setIsLoading(false);
    }, 750);
  }, []);

  // console.log("initial render / outside render");
  // console.log(jobs);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
