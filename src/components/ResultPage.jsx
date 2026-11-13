
import { useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Heart,
  Home,
  MessageCircle,
  RefreshCw,
  Share2,
  Smile,
  Sparkles,
  Star,
  Trophy,
  XCircle,
} from "lucide-react";
import { sendResultToWhatsApp } from "../utils/whatsapp";

export default function ResultPage({
  student,
  examConfig,
  questions,
  answers,
  onRestart,
  theme = "light",
  onToggleTheme,
}) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [shareMessage, setShareMessage] = useState("");

  const dark = theme === "dark";

  // Result calculations
  const total = questions.length;
  const negativeRate = examConfig.negativeMarks ?? 0;

  const answered = questions.filter(
    (_, index) => answers[index] !== undefined && answers[index] !== null
  ).length;

  const correct = questions.reduce(
    (count, question, index) =>
      count + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const wrong = answered - correct;
  const skipped = total - answered;

  const finalMarks = Math.max(0, correct - wrong * negativeRate);

  const percentage =
    total > 0
      ? Number(((finalMarks / total) * 100).toFixed(1))
      : 0;

  const passed = percentage >= (examConfig.passingPercentage ?? 35);

  const result = {
    total,
    correct,
    wrong,
    skipped,
    negativeMarks: Number((wrong * negativeRate).toFixed(2)),
    finalMarks: Number(finalMarks.toFixed(2)),
    percentage,
    status: passed ? "Passed" : "Needs Improvement",
  };

  // Child-friendly messages
  const performance = useMemo(() => {
    if (percentage >= 90) {
      return {
        title: "SUPER STAR!",
        subtitle: "Wow! You are absolutely amazing!",
        emoji: "🏆",
        message: "Fantastic work! Keep shining like a star!",
      };
    }

    if (percentage >= 75) {
      return {
        title: "EXCELLENT JOB!",
        subtitle: "You did a wonderful job!",
        emoji: "🌟",
        message: "You are learning so well. Keep it up!",
      };
    }

    if (percentage >= 50) {
      return {
        title: "GREAT TRY!",
        subtitle: "You are getting better every day!",
        emoji: "🎉",
        message: "Practice a little more and you will shine!",
      };
    }

    return {
      title: "KEEP LEARNING!",
      subtitle: "Every little step makes you smarter!",
      emoji: "🌈",
      message: "Don't worry! Try again and have fun learning!",
    };
  }, [percentage]);

  const filters = [
    { label: "All", count: total },
    { label: "Correct", count: correct },
    { label: "Wrong", count: wrong },
    { label: "Skipped", count: skipped },
  ];

  const reviewQuestions = questions
    .map((question, index) => {
      const selected = answers[index];
      const isSkipped = selected === undefined || selected === null;
      const isCorrect = !isSkipped && selected === question.answer;

      return {
        ...question,
        index,
        selected,
        isSkipped,
        isCorrect,
        isWrong: !isSkipped && !isCorrect,
      };
    })
    .filter((question) => {
      if (filter === "Correct") return question.isCorrect;
      if (filter === "Wrong") return question.isWrong;
      if (filter === "Skipped") return question.isSkipped;
      return true;
    });

  // WhatsApp result
  function handleWhatsApp() {
    sendResultToWhatsApp({
      student,
      result,
      examName: examConfig.examName,
      questions,
      answers,
    });
  }

  // Detailed result sharing
  function getSummary() {
    return [
      `🌈 ${examConfig.appName} - RESULT`,
      `👦 Student: ${student?.name || "Student"}`,
      `🏫 Class: ${student?.className || "Not provided"}`,
      `📚 Exam: ${examConfig.examName}`,
      "",
      `🏆 Score: ${finalMarks}/${total}`,
      `⭐ Percentage: ${percentage}%`,
      `✅ Correct: ${correct}`,
      `❌ Wrong: ${wrong}`,
      `⭕ Skipped: ${skipped}`,
      `🎉 Result: ${performance.title}`,
      "",
      "Keep learning and keep shining!",
    ].join("\n");
  }

  async function handleShare() {
    const summary = getSummary();

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Kids Learning Result",
          text: summary,
        });
      } else {
        await navigator.clipboard.writeText(summary);
        setShareMessage("Result copied successfully!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setShareMessage("Unable to share. Please try WhatsApp.");
      }
    }
  }

  // Theme styles
  const page = dark
    ? "bg-[#111827] text-white"
    : "bg-[#f0f8ff] text-slate-800";

  const card = dark
    ? "bg-slate-800 border-slate-700"
    : "bg-white border-blue-100";

  const muted = dark ? "text-slate-400" : "text-slate-500";

  const statColors = {
    correct: "bg-emerald-500",
    wrong: "bg-rose-500",
    skipped: "bg-amber-500",
    total: "bg-violet-500",
  };

  return (
    <main className={`min-h-screen overflow-hidden ${page} transition-colors duration-500`}>

      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute -right-24 top-60 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">

        {/* Header */}
        <header className="mb-7 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg">
              <BookOpen size={26} />
            </div>

            <div>
              <h1 className="text-lg font-black sm:text-xl">
                {examConfig.appName}
              </h1>
              <p className={`text-xs ${muted}`}>
                Learning is Fun!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`rounded-full border px-3 py-2 text-sm font-bold ${card}`}
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            <span className="rounded-full bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700">
              ✓ Completed
            </span>
          </div>
        </header>

        {/* Main achievement card */}
        <section className="overflow-hidden rounded-[32px] border border-white/50 bg-white shadow-2xl">

          <div className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-violet-600 px-5 py-12 text-center text-white sm:px-10">

            {/* Decorations */}
            <span className="absolute left-5 top-8 animate-bounce text-4xl">⭐</span>
            <span className="absolute right-8 top-12 animate-pulse text-4xl">🎈</span>
            <span className="absolute bottom-5 left-12 text-3xl">🌈</span>
            <span className="absolute bottom-5 right-12 text-3xl">🎉</span>

            <div className="relative">
              <div className="mx-auto flex h-28 w-28 animate-bounce items-center justify-center rounded-full border-4 border-white/50 bg-white/20 text-6xl shadow-xl">
                {performance.emoji}
              </div>

              <p className="mt-6 text-xs font-bold tracking-[0.25em] text-blue-100">
                YOUR EXAM IS COMPLETED
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                {performance.title}
              </h2>

              <p className="mt-3 text-lg font-semibold text-blue-50">
                {performance.subtitle}
              </p>

              <p className="mx-auto mt-2 max-w-md text-sm text-white/90">
                {performance.message}
              </p>

              {/* Score */}
              <div className="mx-auto mt-8 flex h-44 w-44 flex-col items-center justify-center rounded-full border-[9px] border-yellow-300 bg-white text-blue-700 shadow-2xl transition hover:scale-105">

                <span className="text-5xl font-black">
                  {percentage}%
                </span>

                <span className="mt-1 text-sm font-bold">
                  YOUR SCORE
                </span>

                <div className="mt-1 text-xl">
                  ⭐ ⭐ ⭐
                </div>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-black text-yellow-900 shadow-lg">
                <Trophy size={21} />
                {correct} / {total} Correct Answers
              </div>
            </div>
          </div>

          {/* Results body */}
          <div className="p-5 sm:p-9">

            {/* Student details */}
            <div className={`mb-7 rounded-3xl border p-5 ${card}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                  👦
                </div>

                <div>
                  <h3 className="font-black">Hello, {student?.name || "Little Star"}!</h3>
                  <p className={`text-sm ${muted}`}>
                    We are proud of your hard work!
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-800">
                  <p className="text-xs font-bold">CLASS</p>
                  <p className="mt-1 font-black">
                    {student?.className || "LKG / UKG"}
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-3 text-purple-800">
                  <p className="text-xs font-bold">EXAM</p>
                  <p className="mt-1 truncate text-sm font-black">
                    {examConfig.examName}
                  </p>
                </div>
              </div>
            </div>

            {/* Score cards */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

              {[
                {
                  label: "Total Questions",
                  value: total,
                  emoji: "📚",
                  color: statColors.total,
                },
                {
                  label: "Correct Answers",
                  value: correct,
                  emoji: "✅",
                  color: statColors.correct,
                },
                {
                  label: "Wrong Answers",
                  value: wrong,
                  emoji: "❌",
                  color: statColors.wrong,
                },
                {
                  label: "Not Answered",
                  value: skipped,
                  emoji: "⭕",
                  color: statColors.skipped,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-3xl border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${card}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color} text-xl text-white`}>
                    {item.emoji}
                  </div>

                  <p className="mt-3 text-3xl font-black">
                    {item.value}
                  </p>

                  <p className={`mt-1 text-xs font-bold ${muted}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Simple progress */}
            <section className={`mb-9 rounded-3xl border p-5 ${card}`}>
              <h3 className="text-lg font-black">
                🌟 Your Learning Progress
              </h3>

              <p className={`mt-1 text-sm ${muted}`}>
                Look how many questions you answered correctly!
              </p>

              <div className="mt-5 h-5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-1000"
                  style={{
                    width: `${total ? (correct / total) * 100 : 0}%`,
                  }}
                />
              </div>

              <div className="mt-3 flex justify-between text-sm font-bold">
                <span className="text-emerald-600">
                  {correct} Correct
                </span>
                <span className={muted}>
                  {total} Questions
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-yellow-50 p-4 text-yellow-900">
                <Star size={25} className="shrink-0 fill-yellow-400 text-yellow-500" />
                <p className="text-sm font-bold">
                  {performance.message}
                </p>
              </div>
            </section>

            {/* Question review */}
            <section id="question-review">

              <div className="mb-5">
                <h3 className="text-2xl font-black">
                  📖 Let's Check Your Answers
                </h3>

                <p className={`mt-1 text-sm ${muted}`}>
                  Learn the correct answers and become smarter!
                </p>
              </div>

              {/* Filters */}
              <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {filters.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setFilter(item.label)}
                    className={`rounded-2xl border px-3 py-3 text-sm font-black transition ${
                      filter === item.label
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                        : `${card} hover:border-blue-400`
                    }`}
                  >
                    {item.label} ({item.count})
                  </button>
                ))}
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {reviewQuestions.map((question) => {
                  const isOpen = expanded === question.index;

                  return (
                    <article
                      key={question.id ?? question.index}
                      className={`overflow-hidden rounded-3xl border ${card}`}
                    >
                      <button
                        onClick={() =>
                          setExpanded(isOpen ? null : question.index)
                        }
                        className="flex w-full items-center justify-between gap-3 p-4 text-left sm:p-5"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${
                              question.isCorrect
                                ? "bg-emerald-100"
                                : question.isWrong
                                  ? "bg-rose-100"
                                  : "bg-amber-100"
                            }`}
                          >
                            {question.isCorrect
                              ? "😊"
                              : question.isWrong
                                ? "😕"
                                : "🤔"}
                          </div>

                          <div className="min-w-0">
                            <p className={`text-xs font-bold ${muted}`}>
                              QUESTION {question.index + 1}
                            </p>

                            <h4 className="mt-1 line-clamp-2 font-bold">
                              {question.question}
                            </h4>

                            <p className={`mt-1 text-xs font-bold ${
                              question.isCorrect
                                ? "text-emerald-500"
                                : question.isWrong
                                  ? "text-rose-500"
                                  : "text-amber-500"
                            }`}>
                              {question.isCorrect
                                ? "Correct Answer"
                                : question.isWrong
                                  ? "Try Again"
                                  : "Not Answered"}
                            </p>
                          </div>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="shrink-0" />
                        ) : (
                          <ChevronDown className="shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="space-y-3 border-t border-slate-200/50 p-4 sm:p-5">

                          <div>
                            <p className={`mb-2 text-xs font-black ${muted}`}>
                              YOUR ANSWER
                            </p>

                            <div className={`rounded-xl p-3 text-sm font-bold ${
                              question.isCorrect
                                ? "bg-emerald-100 text-emerald-800"
                                : question.isWrong
                                  ? "bg-rose-100 text-rose-800"
                                  : "bg-amber-100 text-amber-800"
                            }`}>
                              {question.isSkipped
                                ? "Not answered"
                                : question.options[question.selected]}
                            </div>
                          </div>

                          <div>
                            <p className={`mb-2 text-xs font-black ${muted}`}>
                              CORRECT ANSWER
                            </p>

                            <div className="rounded-xl bg-emerald-100 p-3 text-sm font-bold text-emerald-800">
                              ✓ {question.options[question.answer]}
                            </div>
                          </div>

                          {question.explanation && (
                            <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
                              <p className="font-black">💡 Learn Something New!</p>
                              <p className="mt-1">
                                {question.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}

                {reviewQuestions.length === 0 && (
                  <div className={`rounded-2xl border p-8 text-center ${card}`}>
                    <Smile size={35} className="mx-auto text-blue-500" />
                    <p className="mt-3 font-bold">
                      No questions here!
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Final message */}
            <div className="my-8 rounded-3xl bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 p-6 text-center">
              <div className="text-4xl">🎈 🎉 🌈</div>
              <h3 className="mt-3 text-2xl font-black text-slate-800">
                You Are a Little Champion!
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                Every day is a new chance to learn something wonderful.
              </p>
              <div className="mt-3 flex justify-center gap-2 text-yellow-500">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
            </div>

            {/* Actions */}
            <div className="grid gap-3 sm:grid-cols-2">

              <button
                onClick={handleWhatsApp}
                className="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1fb95a]"
              >
                <MessageCircle size={22} />
                Send Result to WhatsApp
              </button>

              <button
                onClick={handleShare}
                className="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-4 font-black text-white shadow-lg transition hover:-translate-y-1"
              >
                <Share2 size={22} />
                Share Result
              </button>
            </div>

            {shareMessage && (
              <p className="mt-3 text-center text-sm font-bold text-emerald-500">
                {shareMessage}
              </p>
            )}

            <button
              onClick={onRestart}
              className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border-2 border-blue-200 px-5 py-4 font-black text-blue-600 transition hover:bg-blue-50"
            >
              <RefreshCw size={20} />
              Try Another Quiz
            </button>

            <button
              onClick={onRestart}
              className={`mt-2 flex w-full items-center justify-center gap-2 py-3 text-sm font-bold ${muted}`}
            >
              <Home size={17} />
              Back to Home
            </button>
          </div>
        </section>

        <footer className={`mt-7 text-center text-sm ${muted}`}>
          <p className="font-bold">
            Made with ❤️ for Little Learners
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} {examConfig.appName}
          </p>
        </footer>
      </div>
    </main>
  );
}
