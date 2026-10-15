
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Flag,
  GraduationCap,
  Moon,
  Sun,
  Timer,
  AlertTriangle,
  CircleCheck,
  CircleX,
  CircleDashed,
} from "lucide-react";

const QUESTION_TIME = 60;
const TIMER_RADIUS = 45;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * TIMER_RADIUS;

export default function QuizPage({
  student,
  examConfig,
  questions,
  answers,
  setAnswers,
  currentQuestion,
  setCurrentQuestion,
  onSubmit,
  theme = "light",
  onToggleTheme,
}) {
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [showTimeoutNotice, setShowTimeoutNotice] = useState(false);

  const onSubmitRef = useRef(onSubmit);
  const submittedRef = useRef(false);

  const totalQuestions = questions.length;
  const question = questions[currentQuestion];
  const dark = theme === "dark";

  onSubmitRef.current = onSubmit;

  const heading = dark ? "text-white" : "text-slate-900";
  const muted = dark ? "text-slate-400" : "text-slate-500";

  const panel = dark
    ? "border-white/10 bg-slate-900/80"
    : "border-slate-200 bg-white/95";

  const answeredCount = questions.filter(
    (_, index) => answers[index] !== undefined
  ).length;

  const pendingCount = totalQuestions - answeredCount;

  const progress =
    totalQuestions > 0
      ? Math.round((answeredCount / totalQuestions) * 100)
      : 0;

  const questionProgress =
    totalQuestions > 0
      ? Math.round(((currentQuestion + 1) / totalQuestions) * 100)
      : 0;

  const timerPercentage = Math.max(
    0,
    Math.min(100, (timeLeft / QUESTION_TIME) * 100)
  );

  const timerOffset =
    TIMER_CIRCUMFERENCE -
    (timerPercentage / 100) * TIMER_CIRCUMFERENCE;

  const timerWarning = timeLeft <= 10;
  const timerColor = timerWarning ? "#ef4444" : "#6366f1";

  // Reset the timer for each question.
  useEffect(() => {
    setTimeLeft(QUESTION_TIME);
    setShowTimeoutNotice(false);
    submittedRef.current = false;

    const interval = setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  // Automatically advance when the timer reaches zero.
  useEffect(() => {
    if (timeLeft !== 0 || !question) return;

    setShowTimeoutNotice(true);

    const timeout = setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((previous) => previous + 1);
      } else if (!submittedRef.current) {
        submittedRef.current = true;
        onSubmitRef.current();
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [
    timeLeft,
    currentQuestion,
    totalQuestions,
    question,
    setCurrentQuestion,
  ]);

  function chooseAnswer(optionIndex) {
    if (timeLeft === 0) return;

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion]: optionIndex,
    }));
  }

  function goToQuestion(index) {
    if (index < 0 || index >= totalQuestions) return;

    setCurrentQuestion(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit() {
    if (submittedRef.current) return;

    const unanswered = totalQuestions - answeredCount;

    const confirmed = window.confirm(
      unanswered > 0
        ? `You have ${unanswered} pending question(s). Do you want to submit your exam anyway?`
        : "Are you sure you want to submit your exam?"
    );

    if (confirmed) {
      submittedRef.current = true;
      onSubmit();
    }
  }

  if (!question) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center p-5 ${
          dark ? "bg-[#080d1b]" : "bg-[#f8f9ff]"
        }`}
      >
        <div
          className={`w-full max-w-md rounded-3xl border p-8 text-center shadow-xl ${panel}`}
        >
          <CircleHelp
            className="mx-auto text-indigo-500"
            size={44}
          />

          <h1 className={`mt-4 text-xl font-black ${heading}`}>
            No questions available
          </h1>

          <p className={`mt-2 text-sm leading-6 ${muted}`}>
            Please add questions before starting the exam.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden px-3 py-5 transition-colors duration-500 sm:px-6 sm:py-8 ${
        dark
          ? "bg-[#080d1b] text-white"
          : "bg-[#f8f9ff] text-slate-900"
      }`}
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/10 blur-[100px]" />

        <div className="absolute -right-32 top-80 h-80 w-80 animate-pulse rounded-full bg-violet-500/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 animate-fade-down">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/20 transition-transform duration-300 hover:rotate-3 hover:scale-110 sm:h-12 sm:w-12">
              <GraduationCap size={25} />
            </div>

            <div className="min-w-0">
              <h1 className={`text-lg font-black sm:text-xl ${heading}`}>
                {examConfig.appName || "ExamPro"}
              </h1>

              <p className={`truncate text-sm ${muted}`}>
                {examConfig.examName || "Online Examination"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            className={`flex min-h-10 items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 sm:px-4 sm:text-sm ${
              dark
                ? "border-white/10 bg-slate-800 text-amber-300 hover:bg-slate-700"
                : "border-slate-200 bg-white text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50"
            }`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </header>

        {/* Overall progress */}
        <section
          className={`mb-6 rounded-2xl border p-4 shadow-sm transition-all duration-300 sm:p-5 ${panel}`}
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className={`text-sm font-bold ${heading}`}>
                Exam Progress
              </p>

              <p className={`mt-1 text-xs ${muted}`}>
                Keep going, {student.name || "Student"}!
              </p>
            </div>

            <span className="rounded-xl bg-indigo-500/10 px-3 py-2 text-sm font-black text-indigo-500">
              {progress}% completed
            </span>
          </div>

          <div
            className={`h-2.5 overflow-hidden rounded-full ${
              dark ? "bg-white/10" : "bg-slate-100"
            }`}
            role="progressbar"
            aria-label="Answered questions progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        {/* Main layout: question left, timer/sidebar right */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_290px] xl:gap-6">
          {/* LEFT SIDE: Question */}
          <div className="min-w-0">
            <section
              key={question.id ?? currentQuestion}
              className={`rounded-3xl border p-4 shadow-xl transition-all duration-300 animate-fade-up sm:p-7 lg:p-8 ${panel}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-2 text-sm font-bold text-indigo-500 sm:px-4">
                  <BookOpen size={17} />
                  Question {currentQuestion + 1}
                </span>

                <span className={`text-xs font-medium sm:text-sm ${muted}`}>
                  Student: {student.name}
                </span>
              </div>

              {/* Question progress */}
              <div className="mb-6 mt-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className={`text-xs ${muted}`}>
                    Question {currentQuestion + 1} of {totalQuestions}
                  </span>

                  <span className="text-xs font-bold text-indigo-500">
                    {questionProgress}%
                  </span>
                </div>

                <div
                  className={`h-1.5 overflow-hidden rounded-full ${
                    dark ? "bg-white/10" : "bg-slate-100"
                  }`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 transition-[width] duration-500"
                    style={{ width: `${questionProgress}%` }}
                  />
                </div>
              </div>

              <h2
                className={`text-xl font-black leading-8 sm:text-2xl sm:leading-9 ${heading}`}
              >
                {question.question}
              </h2>

              <p className={`mt-2 text-sm leading-6 ${muted}`}>
                Select one answer from the options below.
              </p>

              {/* Answer options */}
              <div className="mt-6 space-y-3 sm:mt-8">
                {question.options.map((option, index) => {
                  const selected = answers[currentQuestion] === index;

                  return (
                    <button
                      key={`${currentQuestion}-${index}`}
                      type="button"
                      onClick={() => chooseAnswer(index)}
                      disabled={timeLeft === 0}
                      aria-pressed={selected}
                      className={`group flex w-full min-w-0 items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:gap-4 sm:p-4 ${
                        selected
                          ? "border-indigo-500 bg-indigo-500/10 shadow-md shadow-indigo-500/10 ring-2 ring-indigo-500/20"
                          : dark
                            ? "border-white/10 bg-slate-800/50 hover:border-indigo-400/50 hover:bg-slate-800"
                            : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all duration-300 group-hover:scale-105 sm:h-10 sm:w-10 ${
                          selected
                            ? "bg-indigo-600 text-white"
                            : dark
                              ? "bg-white/5 text-slate-300"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span
                        className={`min-w-0 flex-1 break-words font-semibold leading-6 ${heading}`}
                      >
                        {option}
                      </span>

                      {selected && (
                        <CheckCircle2
                          size={21}
                          className="shrink-0 text-indigo-500 animate-scale-in"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div
                className={`mt-7 flex flex-col-reverse gap-3 border-t pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6 ${
                  dark ? "border-white/10" : "border-slate-100"
                }`}
              >
                <button
                  type="button"
                  disabled={currentQuestion === 0}
                  onClick={() => goToQuestion(currentQuestion - 1)}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-5 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 ${
                    dark
                      ? "border-white/10 bg-slate-800 text-slate-200 hover:bg-slate-700"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <ArrowLeft size={18} />
                  Previous
                </button>

                {currentQuestion < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => goToQuestion(currentQuestion + 1)}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                  >
                    Next Question
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95"
                  >
                    <Flag size={18} />
                    Submit Exam
                  </button>
                )}
              </div>

              {showTimeoutNotice && (
                <p
                  role="status"
                  className="mt-5 flex items-center gap-2 rounded-xl bg-amber-500/10 p-3 text-sm font-semibold text-amber-500 animate-fade-in"
                >
                  <AlertTriangle size={18} />
                  Time is up! Moving to the next question...
                </p>
              )}
            </section>
          </div>

          {/* RIGHT SIDE: Circular timer and pending questions */}
          <aside className="flex min-w-0 flex-col gap-5 lg:sticky lg:top-5">
            {/* Circular timer */}
            <section
              className={`relative overflow-hidden rounded-3xl border p-5 shadow-xl transition-all duration-300 sm:p-6 ${panel}`}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className={`text-sm font-black ${heading}`}>
                    Question Timer
                  </p>

                  <p className={`mt-1 text-xs ${muted}`}>
                    60 seconds per question
                  </p>
                </div>

                <div
                  className={`rounded-xl p-2.5 ${
                    timerWarning
                      ? "bg-red-500/10 text-red-500"
                      : "bg-indigo-500/10 text-indigo-500"
                  }`}
                >
                  <Clock3
                    size={20}
                    className={timerWarning ? "animate-pulse" : ""}
                  />
                </div>
              </div>

              <div
                className="relative mx-auto mt-5 flex h-48 w-48 items-center justify-center"
                aria-label={`${timeLeft} seconds remaining`}
                aria-live="polite"
              >
                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 110 110"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="examproTimerGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="55"
                    cy="55"
                    r={TIMER_RADIUS}
                    fill="none"
                    stroke={dark ? "#263247" : "#e9eaf5"}
                    strokeWidth="7"
                  />

                  <circle
                    cx="55"
                    cy="55"
                    r={TIMER_RADIUS}
                    fill="none"
                    stroke={timerWarning ? "#ef4444" : "url(#examproTimerGradient)"}
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={TIMER_CIRCUMFERENCE}
                    strokeDashoffset={timerOffset}
                    className="transition-[stroke-dashoffset,stroke] duration-1000 ease-linear"
                  />
                </svg>

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center ${
                    timerWarning ? "animate-pulse" : ""
                  }`}
                >
                  <Timer
                    size={21}
                    className={timerWarning ? "text-red-500" : "text-indigo-500"}
                  />

                  <span
                    className={`mt-1 text-4xl font-black tabular-nums tracking-tight ${
                      timerWarning ? "text-red-500" : heading
                    }`}
                  >
                    00:{String(timeLeft).padStart(2, "0")}
                  </span>

                  <span className={`mt-1 text-xs font-semibold ${muted}`}>
                    {timeLeft === 0
                      ? "Time finished"
                      : timerWarning
                        ? "Hurry up!"
                        : "Time remaining"}
                  </span>
                </div>
              </div>

              <div
                className={`mt-4 rounded-2xl p-3 text-center text-xs font-semibold ${
                  timerWarning
                    ? "bg-red-500/10 text-red-500"
                    : dark
                      ? "bg-white/5 text-slate-300"
                      : "bg-indigo-50 text-indigo-700"
                }`}
              >
                {timeLeft <= 10 && timeLeft > 0
                  ? "Only a few seconds left!"
                  : timeLeft === 0
                    ? "Moving to the next question..."
                    : "Manage your time carefully"}
              </div>
            </section>

            {/* Pending questions */}
            <section
              className={`rounded-3xl border p-5 shadow-lg transition-all duration-300 sm:p-6 ${panel}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className={`text-sm font-black ${heading}`}>
                    Pending Questions
                  </p>

                  <p className={`mt-1 text-xs ${muted}`}>
                    Questions left unanswered
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                  <CircleDashed size={23} />
                </div>
              </div>

              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-black tracking-tight text-amber-500 tabular-nums">
                  {pendingCount}
                </span>

                <span className={`pb-1 text-sm ${muted}`}>
                  of {totalQuestions} questions
                </span>
              </div>

              <div
                className={`mt-4 h-2 overflow-hidden rounded-full ${
                  dark ? "bg-white/10" : "bg-slate-100"
                }`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-[width] duration-500"
                  style={{
                    width: `${
                      totalQuestions > 0
                        ? (pendingCount / totalQuestions) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-emerald-500/10 p-3">
                  <div className="flex items-center gap-2 text-emerald-500">
                    <CircleCheck size={17} />
                    <span className="text-xs font-bold">Answered</span>
                  </div>

                  <p className="mt-2 text-2xl font-black text-emerald-500 tabular-nums">
                    {answeredCount}
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-500/10 p-3">
                  <div className="flex items-center gap-2 text-amber-500">
                    <CircleX size={17} />
                    <span className="text-xs font-bold">Pending</span>
                  </div>

                  <p className="mt-2 text-2xl font-black text-amber-500 tabular-nums">
                    {pendingCount}
                  </p>
                </div>
              </div>
            </section>

            {/* Question navigator */}
            <section
              className={`rounded-3xl border p-5 shadow-lg sm:p-6 ${panel}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className={`font-black ${heading}`}>
                  Question Navigator
                </h3>

                <span className={`text-xs ${muted}`}>
                  {currentQuestion + 1}/{totalQuestions}
                </span>
              </div>

              <p className={`mt-1 text-xs leading-5 ${muted}`}>
                Tap a number to open that question.
              </p>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {questions.map((item, index) => {
                  const isCurrent = currentQuestion === index;
                  const isAnswered = answers[index] !== undefined;

                  return (
                    <button
                      key={item.id ?? index}
                      type="button"
                      onClick={() => goToQuestion(index)}
                      aria-label={`Go to question ${index + 1}`}
                      aria-current={isCurrent ? "step" : undefined}
                      className={`flex aspect-square min-w-0 items-center justify-center rounded-xl border text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 ${
                        isCurrent
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                          : isAnswered
                            ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-500"
                            : dark
                              ? "border-white/10 bg-slate-800 text-slate-300 hover:border-indigo-400/50"
                              : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div
                className={`mt-4 space-y-2 border-t pt-4 text-xs font-medium ${
                  dark
                    ? "border-white/10 text-slate-400"
                    : "border-slate-100 text-slate-500"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-indigo-600" />
                  Current question
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded bg-emerald-500" />
                  Answered
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded border ${
                      dark
                        ? "border-white/20 bg-slate-800"
                        : "border-slate-300 bg-white"
                    }`}
                  />
                  Pending
                </div>
              </div>
            </section>

            {/* Submit exam */}
            <button
              type="button"
              onClick={handleSubmit}
              className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
            >
              <Flag size={19} />
              Submit Exam
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className={`text-center text-xs leading-5 ${muted}`}>
              Review your pending questions before submitting.
            </p>
          </aside>
        </div>

        <footer className={`mt-8 pb-3 text-center text-xs ${muted}`}>
          ExamPro · Stay focused and do your best.
        </footer>
      </div>
    </main>
  );
}
