// result.js
import React, { useState } from "react";
// import { Sun } from "lucide-react";
// import { Moon } from "lucide-react";
import styles from "./Result.module.css";

const Result = ({ score }) => {
  const [theme, setTheme] = useState();

  let percentage = "";
  if (score === 1) {
    percentage = "20%";
  } else if (score === 2) {
    percentage = "40%";
  } else if (score === 3) {
    percentage = "60%";
  } else if (score === 4) {
    percentage = "80%";
  } else if (score === 5) {
    percentage = "100%";
  } else {
    percentage = "0%";
  }

  return (
    <div className={styles["mainContainer"]} style={{ backgroundColor: theme }}>
     
      <div className={styles["resultContainer"]}>
        <h1>Final Results</h1>
        <span>
          {score} out of 5 correct - ({percentage})
        </span>
        <button onClick={() => window.location.reload()}>Restart</button>
      </div>
    </div>
  );
};

export default Result;
