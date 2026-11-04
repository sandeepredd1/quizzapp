import {
  ArrowRight,
  BookOpen,
  Clock3,
  Moon,
  Sun,
  Trophy,
  Globe2,
  Sparkles,
  ShieldCheck,
  Target,
  GraduationCap,
} from "lucide-react";

export default function LandingPage({
  examConfig,
  totalQuestions,
  onStart,
  theme = "light",
  onToggleTheme,
}) {
  const dark = theme === "dark";
  const duration = examConfig?.durationMinutes ?? 60;
  const examName = examConfig?.examName || "UPSC Geography Exam";
  const questionCount = totalQuestions ?? 50;

  return (
    <main
      className={`exam-landing relative isolate flex h-[100dvh] min-h-[560px] w-full flex-col overflow-hidden transition-colors duration-500 ${
        dark ? "bg-[#070b18] text-white" : "bg-[#f4f6ff] text-slate-900"
      }`}
    >
      <style>{`
        @keyframes float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(14px,-18px,0)} }
        @keyframes orbit { to{transform:rotate(360deg)} }
        @keyframes rise { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        .orb-a{animation:float 13s ease-in-out infinite}.orb-b{animation:float 17s ease-in-out infinite reverse}
        .orbit{animation:orbit 24s linear infinite}.rise{animation:rise .65s cubic-bezier(.2,.8,.2,1) both}
        .d1{animation-delay:.08s}.d2{animation-delay:.16s}.d3{animation-delay:.24s}.d4{animation-delay:.32s}
        .shimmer{background-size:200% 200%;animation:shimmer 7s linear infinite}
        .start-btn:before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 25%,rgba(255,255,255,.25) 50%,transparent 75%);transform:translateX(-120%);transition:transform .7s ease}
        .start-btn:hover:before{transform:translateX(120%)}
        @media(max-height:700px){.compact-main{gap:.55rem}.compact-emblem{width:4.2rem;height:4.2rem}.compact-icon{width:3.2rem;height:3.2rem}.compact-title{font-size:clamp(1.65rem,4.5vh,3.1rem)}.compact-desc{margin-top:.45rem}.compact-stats{margin-top:.75rem}.compact-stat{padding-top:.55rem;padding-bottom:.55rem}.compact-tags{margin-top:.6rem}.compact-start{margin-top:.7rem}.compact-header{padding-top:.55rem;padding-bottom:.55rem}}
        @media(max-height:610px){.compact-emblem{display:none}.compact-main{padding-top:.25rem;padding-bottom:.25rem}.compact-desc{display:none}.compact-stat-icon{display:none}.compact-start-note{display:none}}
        @media(prefers-reduced-motion:reduce){.exam-landing *,.exam-landing *:before{animation:none!important;transition:none!important}}
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={`orb-a absolute -left-32 top-0 h-72 w-72 rounded-full blur-[100px] sm:h-96 sm:w-96 ${dark ? "bg-indigo-600/25" : "bg-indigo-400/30"}`} />
        <div className={`orb-b absolute -right-32 bottom-0 h-72 w-72 rounded-full blur-[110px] sm:h-96 sm:w-96 ${dark ? "bg-fuchsia-600/20" : "bg-violet-400/25"}`} />
        <div className={`absolute inset-0 ${dark ? "opacity-[.10]" : "opacity-[.17]"}`} style={{ backgroundImage: "linear-gradient(rgba(99,102,241,.2) 1px, transparent 1px),linear-gradient(90deg,rgba(99,102,241,.2) 1px,transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(ellipse at center,black,transparent 78%)" }} />
      </div>

      <header className="compact-header relative z-10 mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between px-4 py-3 sm:px-7 lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl border shadow-lg ${dark ? "border-indigo-300/20 bg-indigo-400/10 text-cyan-200" : "border-indigo-100 bg-white/85 text-indigo-700"}`}>
            <GraduationCap size={20} />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-black tracking-[.16em]">UPSC <span className="text-indigo-500">EXAM</span></p>
            <p className={`mt-0.5 text-[8px] font-semibold tracking-[.15em] ${dark ? "text-slate-500" : "text-slate-500"}`}>PRELIMS PRACTICE PORTAL</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`hidden items-center gap-2 rounded-full border px-3 py-2 text-[9px] font-bold tracking-wider sm:flex ${dark ? "border-white/10 bg-white/[.04] text-slate-300" : "border-indigo-100 bg-white/75 text-slate-600"}`}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> EXAM PORTAL
          </span>
          <button type="button" onClick={onToggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} className={`flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-bold shadow-md backdrop-blur-xl transition hover:-translate-y-0.5 ${dark ? "border-white/10 bg-slate-900/80 text-amber-300" : "border-indigo-100 bg-white/85 text-indigo-700"}`}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}{dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <section className="compact-main relative z-10 mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col items-center justify-center gap-2 overflow-hidden px-4 pb-3 pt-1 text-center sm:px-7 lg:px-10">
        <div className="compact-emblem rise relative mb-1 flex h-[5.3rem] w-[5.3rem] shrink-0 items-center justify-center sm:h-24 sm:w-24">
          <div className={`orbit absolute inset-0 rounded-[28px] border border-dashed ${dark ? "border-cyan-300/35" : "border-indigo-300/80"}`} />
          <div className={`absolute inset-2 rounded-[23px] border ${dark ? "border-violet-300/30" : "border-violet-300/70"}`} />
          <div className={`compact-icon relative flex h-[4.1rem] w-[4.1rem] items-center justify-center rounded-[21px] border shadow-[0_15px_45px_rgba(79,70,229,.24)] sm:h-[4.5rem] sm:w-[4.5rem] ${dark ? "border-white/15 bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-400/20 text-cyan-100" : "border-white bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 text-white"}`}>
            <Globe2 size={34} strokeWidth={1.5} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-amber-400 text-white shadow"><Sparkles size={10} /></span>
          </div>
        </div>

        <div className="rise d1 w-full shrink-0">
          <div className={`mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[.19em] sm:text-[9px] ${dark ? "border-cyan-300/20 bg-cyan-300/[.07] text-cyan-200" : "border-indigo-200 bg-white/80 text-indigo-700 shadow-sm"}`}>
            <Sparkles size={11} /> YOUR NEXT CHALLENGE STARTS HERE
          </div>
          <h1 className="compact-title mx-auto max-w-4xl text-[clamp(1.8rem,5.4vh,3.8rem)] font-black leading-[1.08] tracking-tight">
            <span className="block">{examName}</span>
            <span className="shimmer mt-1 block bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">Think deeper. Aim higher.</span>
          </h1>
          <p className={`compact-desc mx-auto mt-2 max-w-xl text-xs leading-5 sm:text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
            Challenge your knowledge, test your preparation, and take one confident step closer to your UPSC goal.
          </p>
        </div>

        <div className={`compact-stats rise d2 mt-3 grid w-full max-w-2xl shrink-0 grid-cols-3 overflow-hidden rounded-2xl border shadow-xl backdrop-blur-2xl sm:rounded-3xl ${dark ? "divide-x divide-white/10 border-white/10 bg-slate-900/65 shadow-black/20" : "divide-x divide-indigo-100 border-white bg-white/80 shadow-indigo-900/10"}`}>
          <div className="compact-stat group flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-indigo-500/[.07] sm:py-4">
            <div className="compact-stat-icon rounded-xl bg-indigo-500/10 p-2 text-indigo-500"><BookOpen size={18} /></div>
            <span className="text-xl font-black tabular-nums sm:text-2xl">{questionCount}</span>
            <span className={`text-[9px] font-semibold sm:text-[11px] ${dark ? "text-slate-400" : "text-slate-500"}`}>Questions</span>
          </div>
          <div className="compact-stat group flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-violet-500/[.07] sm:py-4">
            <div className="compact-stat-icon rounded-xl bg-violet-500/10 p-2 text-violet-500"><Clock3 size={18} /></div>
            <span className="text-xl font-black tabular-nums sm:text-2xl">{duration}m</span>
            <span className={`text-[9px] font-semibold sm:text-[11px] ${dark ? "text-slate-400" : "text-slate-500"}`}>Duration</span>
          </div>
          <div className="compact-stat group flex flex-col items-center gap-1 px-2 py-3 transition hover:bg-amber-500/[.07] sm:py-4">
            <div className="compact-stat-icon rounded-xl bg-amber-500/10 p-2 text-amber-500"><Trophy size={18} /></div>
            <span className="text-xl font-black sm:text-2xl">Hard</span>
            <span className={`text-[9px] font-semibold sm:text-[11px] ${dark ? "text-slate-400" : "text-slate-500"}`}>Difficulty</span>
          </div>
        </div>

        <div className="compact-tags rise d3 mt-2 flex shrink-0 flex-wrap items-center justify-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[9px] font-bold sm:text-[10px] ${dark ? "border-white/10 bg-white/[.04] text-slate-200" : "border-indigo-100 bg-white/75 text-indigo-800"}`}><Target size={13} className="text-indigo-500" /> Geography · UPSC Prelims</span>
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[9px] font-bold sm:text-[10px] ${dark ? "border-emerald-300/15 bg-emerald-300/[.06] text-emerald-200" : "border-emerald-100 bg-emerald-50 text-emerald-700"}`}><ShieldCheck size={13} /> +1 correct · −0.25 wrong</span>
        </div>

        <div className="compact-start rise d4 mt-3 w-full shrink-0">
          <button type="button" onClick={onStart} className="start-btn group relative mx-auto flex min-h-12 w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-6 py-3 text-xs font-black tracking-[.16em] text-white shadow-[0_14px_38px_rgba(99,102,241,.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(99,102,241,.45)] active:scale-[.98] sm:min-h-14 sm:rounded-2xl sm:text-sm">
            <span className="relative">START EXAM</span><ArrowRight size={19} className="relative transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
          <p className={`compact-start-note mt-2 text-[9px] font-medium sm:text-[10px] ${dark ? "text-slate-500" : "text-slate-500"}`}><Trophy size={12} className="mr-1 inline text-amber-500" /> Stay focused. Trust your preparation. Give your best.</p>
        </div>
      </section>
    </main>
  );
}