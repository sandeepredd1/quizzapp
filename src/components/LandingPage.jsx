
import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

export default function LandingPage({
  examConfig,
  totalQuestions,
  onStart,
  theme = "light",
  onToggleTheme,
}) {
  const dark = theme === "dark";

  const heading = dark ? "text-white" : "text-slate-900";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const panel = dark
    ? "border-white/10 bg-slate-900/80"
    : "border-slate-200 bg-white/90";

  const steps = [
    {
      number: "01",
      icon: GraduationCap,
      title: "Enter your details",
      description: "Introduce yourself before starting your examination.",
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Answer questions",
      description: "Read carefully and choose the best answer.",
    },
    {
      number: "03",
      icon: Trophy,
      title: "Check your result",
      description: "View your score and share your result through WhatsApp.",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant results",
      description:
        "See your score, percentage, correct answers, and skipped questions.",
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      icon: ShieldCheck,
      title: "Easy experience",
      description:
        "Enjoy a clean, responsive examination experience on any device.",
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      icon: Target,
      title: "Focus on success",
      description:
        "Challenge yourself and give every question your best effort.",
      color: "bg-violet-500/10 text-violet-500",
    },
  ];

  return (
    <main
      id="home"
      className={`relative isolate min-h-screen overflow-hidden transition-colors duration-500 ${
        dark
          ? "bg-[#080d1b] text-white"
          : "bg-[#f8f9ff] text-slate-900"
      }`}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-violet-500/15 blur-[110px]" />
        <div className="absolute -right-32 top-48 h-96 w-96 animate-pulse rounded-full bg-indigo-500/15 blur-[110px]" />
        <div className="absolute left-1/3 top-[850px] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      {/* Top navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-500/10 bg-inherit/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
              <GraduationCap size={25} />
            </span>
            <span>
              <strong className={`block text-lg font-black ${heading}`}>
                {examConfig.appName}
              </strong>
              <span className={`text-[9px] font-bold tracking-[0.15em] ${muted}`}>
                YOUR JOURNEY TO SUCCESS
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Light / Dark toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              title={`Switch to ${dark ? "light" : "dark"} mode`}
              className={`flex items-center gap-2 rounded-full border px-3 py-2.5 text-xs font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-95 sm:px-4 sm:text-sm ${
                dark
                  ? "border-white/10 bg-slate-800 text-amber-300 hover:bg-slate-700"
                  : "border-slate-200 bg-white text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50"
              }`}
            >
              <span className="grid h-5 w-5 place-items-center">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </span>
              <span>{dark ? "Light mode" : "Dark mode"}</span>
            </button>

            <button
              type="button"
              onClick={onStart}
              className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 sm:flex"
            >
              Start exam <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-28">
        <div className="animate-[fadeUp_.8s_ease_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.15em] text-indigo-500 sm:text-xs">
            <Sparkles size={15} />
            WELCOME TO YOUR EXAM
          </div>

          <h1 className={`mt-7 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl ${heading}`}>
            Dream big.
            <br />
            Prepare well.
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Achieve more.
            </span>
          </h1>

          <p className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${muted}`}>
            Every great achievement starts with one step. Test your
            knowledge, challenge yourself, and show what you can do.
            Your success story starts right here.
          </p>

          <div
            className={`mt-7 flex items-center gap-4 rounded-2xl border p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl ${panel}`}
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-500">
              <Trophy size={25} />
            </div>
            <div>
              <h2 className={`text-sm font-extrabold ${heading}`}>
                All the best for your exam!
              </h2>
              <p className={`mt-1 text-xs leading-5 ${muted}`}>
                Stay confident. Stay focused. Give your best.
              </p>
            </div>
            <Sparkles className="ml-auto shrink-0 text-amber-400" size={20} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStart}
              className="group flex min-h-14 items-center justify-between gap-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 font-bold text-white shadow-xl shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-600/30 active:scale-95"
            >
              Start your exam
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </button>

            <a
              href="#how-it-works"
              className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                dark
                  ? "border-white/10 text-slate-300 hover:bg-white/5"
                  : "border-slate-200 bg-white/70 text-slate-700 hover:border-indigo-200 hover:bg-indigo-50"
              }`}
            >
              Explore exam <ArrowDown size={16} />
            </a>
          </div>

          <div className={`mt-7 flex flex-wrap items-center gap-3 text-xs font-medium ${muted}`}>
            <CheckCircle2 size={16} className="text-emerald-500" />
            Easy to use
            <span className="opacity-40">•</span>
            Mobile friendly
            <span className="opacity-40">•</span>
            Instant score
          </div>
        </div>

        {/* Exam preview card */}
        <div className="relative mx-auto w-full max-w-xl animate-[fadeUp_.9s_.15s_ease_both]">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-fuchsia-500/20 blur-2xl" />

          <div className={`relative rounded-[1.8rem] border p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-7 ${panel}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md">
                  <GraduationCap size={23} />
                </span>
                <div>
                  <p className={`text-xs font-extrabold tracking-wide ${heading}`}>
                    EXAM DASHBOARD
                  </p>
                  <p className={`mt-1 text-[10px] ${muted}`}>
                    It's your time to shine
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-[9px] font-extrabold tracking-wider text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                READY
              </span>
            </div>

            <div className={`my-6 h-px ${dark ? "bg-white/10" : "bg-slate-200"}`} />

            <span className="text-[9px] font-extrabold tracking-[0.17em] text-indigo-500">
              YOUR UPCOMING CHALLENGE
            </span>

            <h2 className={`mt-3 text-2xl font-black tracking-tight sm:text-3xl ${heading}`}>
              {examConfig.examName}
            </h2>

            <p className={`mt-3 text-sm leading-6 ${muted}`}>
              {examConfig.description ||
                "Read carefully, trust your preparation, and choose the best answer."}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className={`flex items-center gap-3 rounded-2xl border p-3 sm:p-4 ${dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50"}`}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/10 text-indigo-500">
                  <BookOpen size={20} />
                </span>
                <span>
                  <strong className={`block text-xl font-black ${heading}`}>
                    {totalQuestions}
                  </strong>
                  <small className={`text-xs ${muted}`}>Questions</small>
                </span>
              </div>

              <div className={`flex items-center gap-3 rounded-2xl border p-3 sm:p-4 ${dark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50"}`}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-500">
                  <Clock3 size={20} />
                </span>
                <span>
                  <strong className={`block text-xl font-black ${heading}`}>60 sec</strong>
                  <small className={`text-xs ${muted}`}>Per question</small>
                </span>
              </div>
            </div>

            <div className={`mt-5 rounded-2xl border p-4 sm:p-5 ${dark ? "border-white/10 bg-black/10" : "border-slate-200 bg-white"}`}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] font-extrabold tracking-wider text-indigo-500">
                  EXAM PREVIEW
                </span>
                <span className={`text-[9px] ${muted}`}>Sample only</span>
              </div>

              <h3 className={`mt-4 text-sm font-bold leading-6 ${heading}`}>
                What's the best way to approach your exam?
              </h3>

              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-3 rounded-xl border border-indigo-500/40 bg-indigo-500/5 p-3 text-xs transition-all duration-300 hover:scale-[1.01]">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-indigo-500 text-white">A</span>
                  <span className={`flex-1 font-semibold ${heading}`}>
                    Stay calm and do my best
                  </span>
                  <CheckCircle2 size={17} className="text-emerald-500" />
                </div>

                {["Believe I can improve", "Give up before starting"].map(
                  (option, index) => (
                    <div
                      key={option}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-xs transition-all duration-300 hover:translate-x-1 ${
                        dark ? "border-white/10" : "border-slate-200"
                      }`}
                    >
                      <span className={`grid h-7 w-7 place-items-center rounded-lg text-[10px] font-bold ${dark ? "bg-white/5 text-slate-400" : "bg-slate-100 text-slate-500"}`}>
                        {index === 0 ? "B" : "C"}
                      </span>
                      <span className={muted}>{option}</span>
                    </div>
                  )
                )}
              </div>

              <p className={`mt-3 flex items-start gap-2 text-[10px] leading-5 ${muted}`}>
                <ShieldCheck size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                This is an illustrative preview, not an actual exam question.
              </p>
            </div>

            <div className={`mt-5 flex items-center gap-3 rounded-2xl p-4 ${dark ? "bg-emerald-500/[0.08]" : "bg-emerald-50"}`}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Award size={21} />
              </span>
              <span className="flex-1">
                <strong className={`block text-xs font-extrabold ${heading}`}>
                  Your effort matters.
                </strong>
                <small className={`mt-1 block text-[10px] ${muted}`}>
                  Make every question count.
                </small>
              </span>
              <CheckCircle2 size={20} className="text-emerald-500" />
            </div>
          </div>

          {/* Floating badges */}
          <div className={`absolute -right-0 top-1/6 hidden items-center gap-3 rounded-2xl border p-3 shadow-xl transition-transform duration-300 hover:scale-110 sm:flex ${panel} animate-bounce`}>
            <Sparkles className="text-violet-500" size={20} />
            <span>
              <strong className={`block text-[11px] ${heading}`}>Believe in yourself</strong>
              <small className={`mt-1 block text-[10px] ${muted}`}>You're ready to shine</small>
            </span>
          </div>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="mx-auto grid max-w-6xl gap-3 px-5 pb-24 sm:grid-cols-3 sm:px-8 lg:px-10">
        {[
          { icon: BookOpen, title: String(totalQuestions), label: "Questions in this exam" },
          { icon: Clock3, title: "60 seconds", label: "Per question" },
          { icon: Trophy, title: "Your result", label: "Review your performance" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex items-center gap-4 rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${panel}`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <Icon size={22} />
              </span>
              <span>
                <strong className={`block text-sm font-extrabold ${heading}`}>
                  {stat.title}
                </strong>
                <small className={`mt-1 block text-xs ${muted}`}>
                  {stat.label}
                </small>
              </span>
            </div>
          );
        })}
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-indigo-500">
            HOW IT WORKS
          </span>
          <h2 className={`mt-4 text-3xl font-black tracking-tight sm:text-5xl ${heading}`}>
            Three simple steps.
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              One confident start.
            </span>
          </h2>
          <p className={`mx-auto mt-4 max-w-lg text-sm leading-7 ${muted}`}>
            From entering your details to receiving your final score,
            everything is designed to keep you focused.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className={`group rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10 sm:p-7 ${panel}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black tracking-widest text-indigo-500">
                    {step.number}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <Icon size={24} />
                  </span>
                </div>
                <h3 className={`mt-7 text-lg font-extrabold ${heading}`}>
                  {step.title}
                </h3>
                <p className={`mt-3 text-sm leading-7 ${muted}`}>
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className={`border-y py-20 sm:py-24 ${dark ? "border-white/10 bg-white/[0.02]" : "border-slate-200/70 bg-white/50"}`}>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
          <div>
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-indigo-500">
              BUILT FOR STUDENTS
            </span>
            <h2 className={`mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${heading}`}>
              Less distraction.
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                More concentration.
              </span>
            </h2>
            <p className={`mt-5 max-w-md text-sm leading-7 ${muted}`}>
              A straightforward online examination experience with
              clear questions, quick evaluation, and easy result sharing.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className={`group flex gap-4 rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg ${panel}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${feature.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className={`font-extrabold ${heading}`}>
                      {feature.title}
                    </h3>
                    <p className={`mt-2 text-xs leading-6 ${muted}`}>
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-16 text-center text-white shadow-2xl shadow-indigo-600/20 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full border-[35px] border-white/[0.07]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border-[45px] border-white/[0.07]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold tracking-[0.16em]">
              <Sparkles size={15} />
              THIS IS YOUR MOMENT
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Ready to give
              <br />
              it your best?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-indigo-100 sm:text-base">
              Take a deep breath, trust your preparation, and begin
              your exam with confidence.
            </p>

            <button
              type="button"
              onClick={onStart}
              className="group mt-8 inline-flex min-h-14 items-center gap-4 rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Let's start the exam
              <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t px-5 py-8 sm:px-8 ${dark ? "border-white/10" : "border-slate-200"}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <GraduationCap size={22} />
            </span>
            <span>
              <strong className={`block text-sm font-black ${heading}`}>
                {examConfig.appName}
              </strong>
              <small className={`mt-1 block text-xs ${muted}`}>
                Believe in yourself. Achieve more.
              </small>
            </span>
          </div>
          <p className={`text-xs ${muted}`}>
            © {new Date().getFullYear()} {examConfig.appName}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
