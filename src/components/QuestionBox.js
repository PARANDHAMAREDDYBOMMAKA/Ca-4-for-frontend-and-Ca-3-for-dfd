import React, { useState } from "react";
import styles from "./QuestionBox.module.css";
import Result from "./Result";

const QuestionBox = ({ question, onAnswerClick }) => {
  const [highlightText, setHighlightText] = useState(false);

  return (
    <>
      <h1>Quiz</h1>
      <div
        className={styles["mainContainer"]}
      >
       
        <div className={styles["questionBox"]}>
          <p style={{ color: highlightText ? "orange" : "black" }}>
            {question.text}
          </p>

          <div className={styles["optionsContainer"]}>
            <button
              onClick={() => onAnswerClick(question.options[0].isCorrect)}
            >
              {question.options[0].text}
            </button>
            <button
              onClick={() => onAnswerClick(question.options[1].isCorrect)}
            >
              {question.options[1].text}
            </button>
            <button
              onClick={() => onAnswerClick(question.options[2].isCorrect)}
            >
              {question.options[2].text}
            </button>
            <button
              onClick={() => onAnswerClick(question.options[3].isCorrect)}
            >
              {question.options[3].text}
            </button>
          </div>
          <div>
            <div className={styles["highlightbuttonContainer"]}>
              <button id={styles["highlight"]} onClick={() => setHighlightText(true)}>Highlight</button>
              <button id={styles["removeHighlight"]} onClick={() => setHighlightText(false)}>
                Remove Highlight
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionBox;
