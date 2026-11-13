
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Flame,
  Landmark,
  Moon,
  Sun,
} from "lucide-react";

export default function LandingPage({
  examConfig,
  totalQuestions,
  onStart,
  theme = "light",
  onToggleTheme,
}) {
  const dark = theme === "dark";

  const examName = examConfig?.examName || "UPSC Indian Polity";
  const questionCount = totalQuestions ?? 50;
  const duration = examConfig?.durationMinutes ?? 60;
  const marks = examConfig?.marksPerQuestion ?? 1;
  const negativeMarks = examConfig?.negativeMarks ?? 0.25;

  return (
    <main
      className={`orange-page relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 py-3 transition-colors duration-300 sm:px-6 ${
        dark ? "bg-[#1b120c] text-orange-50" : "bg-[#fff7ed] text-slate-900"
      }`}
    >
      <style>{`
        @keyframes page-in {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ambient-float {
          0%,100% {
            transform: translate(0,0);
          }
          50% {
            transform: translate(10px,-10px);
          }
        }

        .orange-page .page-in {
          animation: page-in .55s ease-out both;
        }

        .orange-page .ambient {
          animation: ambient-float 12s ease-in-out infinite;
        }

        .orange-page .start-button {
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .orange-page .start-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(234,88,12,.28);
        }

        .orange-page .start-button:active {
          transform: scale(.98);
        }

        @media (max-height: 650px) {
          .orange-page {
            padding-top: 8px;
            padding-bottom: 8px;
          }

          .orange-page .content-card {
            padding-top: 18px;
            padding-bottom: 18px;
          }

          .orange-page .hero-title {
            font-size: clamp(25px, 5vh, 40px);
          }

          .orange-page .hero-description {
            margin-top: 6px;
          }

          .orange-page .exam-details {
            margin-top: 14px;
          }

          .orange-page .topics {
            margin-top: 12px;
          }

          .orange-page .start-wrap {
            margin-top: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orange-page *,
          .orange-page *::before,
          .orange-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`ambient absolute -left-28 -top-28 h-64 w-64 rounded-full blur-[90px] ${
            dark ? "bg-orange-600/20" : "bg-orange-300/45"
          }`}
        />

        <div
          className={`ambient absolute -bottom-28 -right-24 h-72 w-72 rounded-full blur-[100px] ${
            dark ? "bg-amber-500/15" : "bg-amber-300/40"
          }`}
        />
      </div>

      <section
        className={`content-card page-in relative z-10 w-full max-w-3xl rounded-3xl border px-5 py-6 shadow-xl sm:px-9 sm:py-7 ${
          dark
            ? "border-orange-200/10 bg-[#261a11]/95 shadow-black/30"
            : "border-orange-100 bg-white/95 shadow-orange-900/10"
        }`}
      >
        {/* Header */}
        <header className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                dark
                  ? "bg-orange-500/15 text-orange-300"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              <Landmark size={22} />
            </div>

            <div>
              <p className="text-sm font-black tracking-[.12em]">
                UPSC <span className="text-orange-600">PREP</span>
              </p>

              <p
                className={`text-[9px] font-semibold tracking-[.15em] ${
                  dark ? "text-orange-100/45" : "text-slate-400"
                }`}
              >
                PRELIMS MOCK TEST
              </p>
            </div>
          </div>

          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                dark
                  ? "border-orange-200/15 bg-white/5 text-amber-300"
                  : "border-orange-100 bg-orange-50 text-orange-700"
              }`}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
        </header>

        {/* Exam title */}
        <div className="text-center">
          <span
            className={`page-in inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-extrabold tracking-[.15em] ${
              dark
                ? "border-orange-300/20 bg-orange-400/10 text-orange-200"
                : "border-orange-200 bg-orange-50 text-orange-700"
            }`}
          >
            <Flame size={13} />
            UPSC PRELIMS PRACTICE
          </span>

          <h1 className="hero-title page-in mt-3 text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight">
            {examName}
          </h1>

          <p
            className={`hero-description page-in mx-auto mt-2 max-w-xl text-sm leading-6 ${
              dark ? "text-orange-100/65" : "text-slate-600"
            }`}
          >
            Test your knowledge of the Indian Constitution and strengthen
            your understanding of Indian Polity.
          </p>
        </div>

        {/* Exam details — inline, no grid/cards */}
        <div
          className={`exam-details page-in mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y py-4 ${
            dark ? "border-orange-200/10" : "border-orange-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <BookOpen size={17} className="text-orange-500" />
            <span className="text-sm font-extrabold">
              {questionCount}
            </span>
            <span
              className={`text-xs ${
                dark ? "text-orange-100/55" : "text-slate-500"
              }`}
            >
              Questions
            </span>
          </div>

          <span
            className={`hidden h-5 w-px sm:block ${
              dark ? "bg-orange-200/15" : "bg-orange-200"
            }`}
          />

          <div className="flex items-center gap-2">
            <Clock3 size={17} className="text-orange-500" />
            <span className="text-sm font-extrabold">
              {duration}
            </span>
            <span
              className={`text-xs ${
                dark ? "text-orange-100/55" : "text-slate-500"
              }`}
            >
              Minutes
            </span>
          </div>

          <span
            className={`hidden h-5 w-px sm:block ${
              dark ? "bg-orange-200/15" : "bg-orange-200"
            }`}
          />

          <div className="flex items-center gap-2">
            <Flame size={17} className="text-orange-500" />
            <span className="text-sm font-extrabold">
              +{marks}
            </span>
            <span
              className={`text-xs ${
                dark ? "text-orange-100/55" : "text-slate-500"
              }`}
            >
              Correct
            </span>
          </div>
        </div>

        {/* Topics in one compact line */}
        <div className="topics page-in mx-auto mt-5 max-w-2xl text-center">
          <p
            className={`mb-2 text-[9px] font-extrabold tracking-[.16em] ${
              dark ? "text-orange-100/45" : "text-slate-400"
            }`}
          >
            EXAM TOPICS
          </p>

          <p
            className={`text-xs leading-6 ${
              dark ? "text-orange-100/75" : "text-slate-600"
            }`}
          >
            Constitutional History
            <span className="px-1 text-orange-500">•</span>
            Preamble
            <span className="px-1 text-orange-500">•</span>
            Fundamental Rights
            <span className="px-1 text-orange-500">•</span>
            DPSP & Duties
            <span className="px-1 text-orange-500">•</span>
            Amendments
          </p>
        </div>

        {/* Marking and start */}
        <div className="start-wrap page-in mt-5 text-center">
          <p
            className={`mb-4 text-xs font-semibold ${
              dark ? "text-orange-100/55" : "text-slate-500"
            }`}
          >
            Marking: +{marks} for correct
            <span className="mx-2 text-orange-400">•</span>
            −{negativeMarks} for incorrect
          </p>

          <button
            type="button"
            onClick={onStart}
            className="start-button group inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-7 py-3.5 text-sm font-extrabold tracking-[.1em] text-white shadow-lg shadow-orange-600/20"
          >
            START EXAM

            <ArrowRight
              size={19}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          <p
            className={`mt-3 text-[10px] ${
              dark ? "text-orange-100/35" : "text-slate-400"
            }`}
          >
            Stay focused. Give your best. All the best!
          </p>
        </div>
      </section>
    </main>
  );
}
