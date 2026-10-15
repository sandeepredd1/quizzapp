
import { useEffect, useState } from "react";

import LandingPage from "./components/LandingPage";
import StudentForm from "./components/StudentForm";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

import { examConfig, questions } from "./data/questions";

export default function App() {
  const [page, setPage] = useState("landing");

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("exampro-theme") || "light";
    } catch {
      return "light";
    }
  });

  const [student, setStudent] = useState({
    name: "",
    phone: "",
    className: "",
  });

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    try {
      localStorage.setItem("exampro-theme", theme);
    } catch {
      // Continue if browser storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  function startExam() {
    setPage("student");
  }

  function continueToQuiz() {
    setAnswers({});
    setCurrentQuestion(0);
    setPage("quiz");
  }

  function submitExam() {
    setPage("result");
  }

  function restartExam() {
    setStudent({
      name: "",
      phone: "",
      className: "",
    });

    setAnswers({});
    setCurrentQuestion(0);
    setPage("landing");
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#080d1b] text-white"
          : "bg-[#f8f9ff] text-slate-900"
      }`}
    >
      {page === "landing" && (
        <LandingPage
          examConfig={examConfig}
          totalQuestions={questions.length}
          onStart={startExam}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}

      {page === "student" && (
        <StudentForm
          student={student}
          setStudent={setStudent}
          onContinue={continueToQuiz}
          onBack={() => setPage("landing")}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}

      {page === "quiz" && (
        <QuizPage
          student={student}
          examConfig={examConfig}
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          onSubmit={submitExam}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}

      {page === "result" && (
        <ResultPage
          student={student}
          examConfig={examConfig}
          questions={questions}
          answers={answers}
          onRestart={restartExam}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}
