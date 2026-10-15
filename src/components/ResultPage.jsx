import { useState } from "react";
import {
  Award,
  ArrowLeft,
  CheckCircle2,
  CircleHelp,
  GraduationCap,
  MessageCircle,
  RotateCcw,
  Share2,
  Trophy,
  XCircle,
  Moon,
  Sun,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { sendResultToWhatsApp } from "../utils/whatsapp";

const NEGATIVE_MARK_PER_WRONG = 0.25;

export default function ResultPage({
  student,
  examConfig,
  questions,
  answers,
  onRestart,
  theme = "light",
  onToggleTheme,
}) {
  const [shareMessage, setShareMessage] = useState("");
  const [filter, setFilter] = useState("All Questions");
  const dark = theme === "dark";

  const total = questions.length;

  const correct = questions.reduce(
    (count, question, index) =>
      count + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const answered = questions.filter(
    (_, index) => answers[index] !== undefined && answers[index] !== null
  ).length;

  const wrong = answered - correct;
  const skipped = total - answered;

  const negativeMarks = wrong * NEGATIVE_MARK_PER_WRONG;
  const finalMarks = Math.max(0, correct - negativeMarks);
  const percentage =
    total > 0 ? Number(((finalMarks / total) * 100).toFixed(2)) : 0;

  const passed = percentage >= (examConfig.passingPercentage ?? 40);

  const result = {
    total,
    correct,
    wrong,
    skipped,
    negativeMarks: Number(negativeMarks.toFixed(2)),
    finalMarks: Number(finalMarks.toFixed(2)),
    percentage,
    status: passed ? "Passed" : "Needs Improvement",
  };

  const heading = dark ? "text-white" : "text-slate-900";
  const muted = dark ? "text-slate-400" : "text-slate-500";
  const panel = dark
    ? "border-white/10 bg-slate-900/80"
    : "border-slate-200 bg-white/90";

  const filters = [
    { label: "All Questions", count: total },
    { label: "Correct", count: correct },
    { label: "Wrong", count: wrong },
    { label: "Skipped", count: skipped },
  ];

  const filteredQuestions = questions
    .map((question, index) => {
      const selectedAnswer = answers[index];
      const isSkipped =
        selectedAnswer === undefined || selectedAnswer === null;
      const isCorrect = !isSkipped && selectedAnswer === question.answer;

      return {
        ...question,
        originalIndex: index,
        selectedAnswer,
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

  function handleWhatsApp() {
    sendResultToWhatsApp({
      student,
      result,
      examName: examConfig.examName,
      questions,
      answers,
    });
  }

  function getSummary() {
    return [
      `${examConfig.appName} - Exam Result`,
      `Student: ${student.name || "Not provided"}`,
      `Phone: ${student.phone || "Not provided"}`,
      `Gender: ${student.gender || "Not provided"}`,
      `Class / Roll Number: ${student.className || "Not provided"}`,
      `Exam: ${examConfig.examName}`,
      `Correct: ${correct}`,
      `Wrong: ${wrong}`,
      `Skipped: ${skipped}`,
      `Negative Marks: ${negativeMarks.toFixed(2)}`,
      `Final Score: ${finalMarks.toFixed(2)}/${total}`,
      `Percentage: ${percentage}%`,
      `Status: ${result.status}`,
      "",
      "QUESTION-WISE REVIEW",
      ...questions.map((question, index) => {
        const selected = answers[index];
        const isSkipped = selected === undefined || selected === null;
        const isCorrect = !isSkipped && selected === question.answer;
        const status = isSkipped ? "SKIPPED" : isCorrect ? "CORRECT" : "WRONG";
        const studentAnswer = isSkipped
          ? "Not answered"
          : question.options[selected] ?? "Invalid answer";

        return [
          `${index + 1}. ${question.question}`,
          `Status: ${status}`,
          `Student Answer: ${studentAnswer}`,
          `Correct Answer: ${question.options[question.answer]}`,
          !isSkipped && !isCorrect
            ? `Penalty: -${NEGATIVE_MARK_PER_WRONG.toFixed(2)} marks`
            : null,
        ]
          .filter(Boolean)
          .join("\n");
      }),
    ].join("\n");
  }

  async function handleShare() {
    const summary = getSummary();

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${examConfig.appName} - Exam Result`,
          text: summary,
        });
        setShareMessage("");
      } catch (error) {
        if (error.name !== "AbortError") {
          await copyResult(summary);
        }
      }
    } else {
      await copyResult(summary);
    }
  }

  async function copyResult(text) {
    try {
      await navigator.clipboard.writeText(text);
      setShareMessage("Detailed result copied to clipboard!");
    } catch {
      setShareMessage(
        "Unable to copy automatically. Please use WhatsApp instead."
      );
    }
  }

  function StatCard({ icon, label, value, color }) {
    const colors = {
      indigo: dark
        ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
        : "border-indigo-100 bg-indigo-50 text-indigo-600",
      emerald: dark
        ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
        : "border-emerald-100 bg-emerald-50 text-emerald-700",
      red: dark
        ? "border-red-400/20 bg-red-500/10 text-red-300"
        : "border-red-100 bg-red-50 text-red-600",
      amber: dark
        ? "border-amber-400/20 bg-amber-500/10 text-amber-300"
        : "border-amber-100 bg-amber-50 text-amber-700",
    };

    return (
      <div
        className={`rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colors[color]}`}
      >
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          {icon}
        </div>
        <p className="text-2xl font-black">{value}</p>
        <p
          className={`mt-1 text-xs font-medium ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {label}
        </p>
      </div>
    );
  }

  function InfoRow({ label, value }) {
    return (
      <div
        className={`flex items-start justify-between gap-4 border-b pb-3 ${
          dark ? "border-white/10" : "border-slate-100"
        }`}
      >
        <span className={`text-sm ${muted}`}>{label}</span>
        <span
          className={`max-w-[60%] break-words text-right text-sm font-bold ${
            dark ? "text-slate-200" : "text-slate-800"
          }`}
        >
          {value}
        </span>
      </div>
    );
  }

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden px-4 py-6 transition-colors duration-500 sm:px-6 sm:py-10 ${
        dark ? "bg-[#080d1b] text-white" : "bg-[#f8f9ff] text-slate-900"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute -right-32 top-96 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <header className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg">
              <GraduationCap size={25} />
            </div>
            <div>
              <h1 className={`font-black ${heading}`}>
                {examConfig.appName}
              </h1>
              <p className={`text-sm ${muted}`}>Exam Report</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              className={`flex items-center gap-2 rounded-full border px-3 py-2.5 text-xs font-bold transition sm:px-4 sm:text-sm ${
                dark
                  ? "border-white/10 bg-slate-800 text-amber-300 hover:bg-slate-700"
                  : "border-slate-200 bg-white text-indigo-700 hover:bg-indigo-50"
              }`}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
              {dark ? "Light mode" : "Dark mode"}
            </button>

            <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-500">
              <CheckCircle2 size={16} />
              Completed
            </span>
          </div>
        </header>

        <section
          className={`overflow-hidden rounded-3xl border shadow-2xl ${panel}`}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-6 py-10 text-center text-white sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
            <div className="relative">
              <div className="mx-auto flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                <Trophy size={33} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-200">
                EXAM COMPLETED
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                {passed ? "Congratulations!" : "Keep Practising!"}
              </h2>

              <p className="mt-3 text-sm leading-6 text-indigo-100 sm:text-base">
                Well done, {student.name}. Here is your performance report.
              </p>

              <div className="mx-auto mt-8 flex h-40 w-40 flex-col items-center justify-center rounded-full border-[6px] border-white/25 bg-white/10 shadow-2xl backdrop-blur-sm transition hover:scale-105">
                <span className="text-4xl font-black">{percentage}%</span>
                <span className="mt-2 text-sm font-semibold text-indigo-100">
                  Final Percentage
                </span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">
                <Award size={18} />
                {finalMarks.toFixed(2)} / {total} marks
              </div>

              <p className="mt-3 text-sm text-indigo-100">
                Negative marking applied: -{negativeMarks.toFixed(2)} marks
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-9">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard
                icon={<BookOpen size={21} />}
                label="Total Questions"
                value={total}
                color="indigo"
              />
              <StatCard
                icon={<CheckCircle2 size={21} />}
                label="Correct"
                value={correct}
                color="emerald"
              />
              <StatCard
                icon={<XCircle size={21} />}
                label="Wrong"
                value={wrong}
                color="red"
              />
              <StatCard
                icon={<CircleHelp size={21} />}
                label="Skipped"
                value={skipped}
                color="amber"
              />
            </div>

            <div
              className={`mt-7 rounded-2xl border p-5 sm:p-6 ${
                dark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <h3 className={`text-base font-black ${heading}`}>
                Student Information
              </h3>
              <p className={`mt-1 text-sm ${muted}`}>
                Student details and exam performance.
              </p>

              <div className="mt-5 space-y-4">
                <InfoRow label="Student Name" value={student.name || "Not provided"} />
                <InfoRow label="Gender" value={student.gender || "Not provided"} />
                <InfoRow label="Exam Name" value={examConfig.examName} />
                <InfoRow label="Mobile Number" value={student.phone || "Not provided"} />
                <InfoRow
                  label="Class / Roll Number"
                  value={student.className || "Not provided"}
                />
                <InfoRow label="Correct Marks" value={correct.toFixed(2)} />
                <InfoRow
                  label="Negative Marks"
                  value={`-${negativeMarks.toFixed(2)}`}
                />
                <InfoRow
                  label="Final Marks"
                  value={`${finalMarks.toFixed(2)} / ${total}`}
                />
                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className={`text-sm ${muted}`}>Result Status</span>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                      passed
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Question-wise review */}
            <section className="mt-8" id="question-review">
              <div className="mb-4">
                <h3 className={`text-xl font-black ${heading}`}>
                  Question-wise Review
                </h3>
                <p className={`mt-1 text-sm ${muted}`}>
                  Check your answers and learn the correct answers.
                </p>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {filters.map((item) => {
                  const active = filter === item.label;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setFilter(item.label)}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                        active
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                          : dark
                            ? "border-white/10 bg-slate-800 text-slate-300 hover:border-indigo-400/50"
                            : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`rounded-lg px-2 py-1 text-xs ${
                          active
                            ? "bg-white/20"
                            : dark
                              ? "bg-slate-700"
                              : "bg-slate-100"
                        }`}
                      >
                        {item.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-4">
                {filteredQuestions.map((question) => {
                  const status = question.isSkipped
                    ? "Skipped"
                    : question.isCorrect
                      ? "Correct"
                      : "Wrong";

                  const statusStyle = question.isSkipped
                    ? dark
                      ? "border-amber-400/20 bg-amber-500/10 text-amber-300"
                      : "border-amber-200 bg-amber-50 text-amber-700"
                    : question.isCorrect
                      ? dark
                        ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                        : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : dark
                        ? "border-red-400/20 bg-red-500/10 text-red-300"
                        : "border-red-200 bg-red-50 text-red-700";

                  return (
                    <article
                      key={question.id ?? question.originalIndex}
                      className={`rounded-2xl border p-4 transition sm:p-5 ${
                        dark
                          ? "border-white/10 bg-slate-950/40"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h4 className={`flex-1 font-bold leading-6 ${heading}`}>
                          <span className="mr-2 text-indigo-500">
                            Q{question.originalIndex + 1}.
                          </span>
                          {question.question}
                        </h4>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold ${statusStyle}`}
                        >
                          {question.isSkipped ? (
                            <CircleHelp size={14} />
                          ) : question.isCorrect ? (
                            <CheckCircle2 size={14} />
                          ) : (
                            <XCircle size={14} />
                          )}
                          {status}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <div
                          className={`rounded-xl border p-3 ${
                            question.isCorrect
                              ? dark
                                ? "border-emerald-400/30 bg-emerald-500/10"
                                : "border-emerald-200 bg-emerald-50"
                              : question.isWrong
                                ? dark
                                  ? "border-red-400/30 bg-red-500/10"
                                  : "border-red-200 bg-red-50"
                                : dark
                                  ? "border-white/10 bg-slate-900"
                                  : "border-slate-100 bg-slate-50"
                          }`}
                        >
                          <p className={`text-xs font-bold ${muted}`}>
                            YOUR ANSWER
                          </p>
                          <p
                            className={`mt-2 break-words text-sm font-semibold ${
                              question.isCorrect
                                ? "text-emerald-500"
                                : question.isWrong
                                  ? "text-red-500"
                                  : muted
                            }`}
                          >
                            {question.isSkipped
                              ? "Not answered"
                              : question.options[question.selectedAnswer] ??
                                "Unknown answer"}
                          </p>
                        </div>

                        <div
                          className={`rounded-xl border p-3 ${
                            dark
                              ? "border-emerald-400/20 bg-emerald-500/10"
                              : "border-emerald-200 bg-emerald-50"
                          }`}
                        >
                          <p className={`text-xs font-bold ${muted}`}>
                            CORRECT ANSWER
                          </p>
                          <p className="mt-2 break-words text-sm font-semibold text-emerald-500">
                            {question.options[question.answer]}
                          </p>
                        </div>
                      </div>

                      {question.isWrong && (
                        <p className="mt-3 text-sm font-bold text-red-500">
                          Negative marking: -{NEGATIVE_MARK_PER_WRONG.toFixed(2)} marks
                        </p>
                      )}

                      {question.isCorrect && (
                        <p className="mt-3 text-sm font-semibold text-emerald-500">
                          +1 mark
                        </p>
                      )}

                      {question.isSkipped && (
                        <p className={`mt-3 text-sm ${muted}`}>
                          No penalty for this skipped question.
                        </p>
                      )}
                    </article>
                  );
                })}

                {filteredQuestions.length === 0 && (
                  <div
                    className={`rounded-2xl border p-8 text-center ${
                      dark
                        ? "border-white/10 bg-slate-950/40"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <Sparkles
                      className="mx-auto mb-3 text-indigo-500"
                      size={30}
                    />
                    <p className={`font-bold ${heading}`}>
                      No {filter.toLowerCase()} questions
                    </p>
                    <p className={`mt-1 text-sm ${muted}`}>
                      There are no questions in this category.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Actions */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1fb95a] active:scale-95"
              >
                <MessageCircle size={21} />
                Send Detailed Result to WhatsApp
              </button>

              <button
                type="button"
                onClick={handleShare}
                className={`flex min-h-14 items-center justify-center gap-3 rounded-xl border px-5 py-4 font-bold transition hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-indigo-50"
                }`}
              >
                <Share2 size={20} />
                Share Detailed Result
              </button>
            </div>

            {shareMessage && (
              <p
                role="status"
                className="mt-3 text-center text-sm font-medium text-indigo-500"
              >
                {shareMessage}
              </p>
            )}

            <button
              type="button"
              onClick={onRestart}
              className={`mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                dark
                  ? "text-slate-400 hover:bg-white/5 hover:text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
              }`}
            >
              <RotateCcw size={18} />
              Back to Home
              <ArrowLeft size={17} />
            </button>

            <p className={`mt-4 text-center text-xs leading-5 ${muted}`}>
              WhatsApp opens with the detailed report ready to send. Confirm by
              tapping Send in WhatsApp.
            </p>
          </div>
        </section>

        <footer className={`mt-6 text-center text-xs ${muted}`}>
          © {new Date().getFullYear()} {examConfig.appName} · Keep learning,
          keep growing.
        </footer>
      </div>
    </main>
  );
}