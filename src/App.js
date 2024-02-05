// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setResult(true);
    }
  }, [currentIndex]);

  const handleClickOnAnswer = (isCorrect) => {
    setUserAnswers([...userAnswers, isCorrect]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setResult(true);
    }

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className="mainContainer1" style={{ backgroundColor: theme }}>
     <div className="toggleButton">
          {theme === "white" ? (
            <Moon size={30} onClick={() => setTheme("grey")} />
          ) : (
            <Sun size={30} onClick={() => setTheme("white")} />
          )}
        </div>
      {result ? (
        <Result score={score} />
      ) : (
        <QuestionBox
          question={questions[currentIndex]}
          onAnswerClick={handleClickOnAnswer}
        />
      )}
    </div>
  );
}

export default App;
