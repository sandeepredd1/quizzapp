
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  UserRound,
  Phone,
  BookOpen,
  Sparkles,
  CircleHelp,
  Moon,
  Sun,
  Users,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function StudentForm({
  student,
  setStudent,
  onContinue,
  onBack,
  theme = "light",
  onToggleTheme,
}) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dark = theme === "dark";

  const heading = dark ? "text-white" : "text-slate-900";
  const muted = dark ? "text-slate-400" : "text-slate-500";
  const labelClass = dark ? "text-slate-200" : "text-slate-800";

  const inputClass = `
    w-full min-w-0 rounded-xl border py-3.5 pl-12 pr-4
    text-sm outline-none transition-all duration-300
    focus:ring-4
    ${
      dark
        ? "border-white/10 bg-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:ring-indigo-500/15"
        : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500/10"
    }
  `;

  function handleChange(event) {
    const { name, value } = event.target;

    setStudent((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      form: "",
    }));
  }

  function handleGenderChange(event) {
    handleChange(event);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    const cleanName = (student.name || "").trim();
    const cleanPhone = (student.phone || "").trim();
    const cleanGender = (student.gender || "").trim();
    const cleanClass = (student.className || "").trim();

    if (cleanName.length < 2) {
      nextErrors.name = "Please enter your full name.";
    } else if (cleanName.length > 100) {
      nextErrors.name = "Name must be under 100 characters.";
    }

    if (!cleanGender) {
      nextErrors.gender = "Please select your gender.";
    }

    if (
      cleanPhone &&
      !/^[0-9+\-()\s]{7,20}$/.test(cleanPhone)
    ) {
      nextErrors.phone = "Please enter a valid mobile number.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStudent((previous) => ({
      ...previous,
      name: cleanName,
      phone: cleanPhone,
      gender: cleanGender,
      className: cleanClass,
    }));

    setErrors({});
    setIsSubmitting(true);

    // Let React update the student state before navigating.
    requestAnimationFrame(() => {
      onContinue();
    });
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
        <div
          className={`absolute -left-24 top-20 h-56 w-56 rounded-full blur-[90px] sm:h-72 sm:w-72 ${
            dark ? "bg-indigo-500/20" : "bg-indigo-400/20"
          } animate-pulse`}
        />

        <div
          className={`absolute -right-24 bottom-10 h-64 w-64 rounded-full blur-[100px] sm:h-80 sm:w-80 ${
            dark ? "bg-violet-500/20" : "bg-violet-400/20"
          } animate-pulse`}
        />

        <div
          className={`absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${
            dark ? "bg-blue-500/5" : "bg-indigo-300/10"
          }`}
        />
      </div>

      {/* Top navigation */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 animate-fade-down">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex min-h-10 items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-x-1 ${
            dark
              ? "text-slate-300 hover:bg-white/5 hover:text-white"
              : "text-slate-600 hover:bg-white hover:text-indigo-600"
          }`}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
              <GraduationCap size={21} />
            </div>

            <span className={`font-extrabold ${heading}`}>
              Exam<span className="text-indigo-500">Pro</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            className={`flex min-h-10 items-center justify-center gap-2 rounded-full border px-3 py-2 text-xs font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 sm:px-4 sm:text-sm ${
              dark
                ? "border-white/10 bg-slate-800 text-amber-300 hover:bg-slate-700"
                : "border-slate-200 bg-white text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50"
            }`}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
            <span>{dark ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </header>

      {/* Student registration card */}
      <section className="relative z-10 mx-auto mt-6 w-full max-w-xl animate-fade-up sm:mt-9">
        <div
          className={`overflow-hidden rounded-3xl border shadow-2xl transition-all duration-500 sm:rounded-[2rem] ${
            dark
              ? "border-white/10 bg-slate-900/90 shadow-black/30"
              : "border-slate-200/80 bg-white/95 shadow-indigo-900/10"
          }`}
        >
          {/* Gradient card header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 px-5 py-7 text-white sm:px-9 sm:py-10">
            <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full border-[22px] border-white/10 sm:h-40 sm:w-40" />

            <div className="pointer-events-none absolute -bottom-12 right-20 h-36 w-36 rounded-full bg-violet-400/20 blur-2xl" />

            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg backdrop-blur transition-transform duration-500 hover:rotate-6 hover:scale-110">
                <GraduationCap size={30} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-200">
                Step 01 · Registration
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Student Details
              </h1>

              <p className="mt-3 max-w-md text-sm leading-6 text-indigo-100 sm:text-base">
                Get ready to show what you know. Enter your details
                before starting your exam.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-indigo-100">
                <ShieldCheck size={16} />
                <span>Complete your details to continue</span>
              </div>
            </div>
          </div>

          {/* Registration form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 p-5 sm:space-y-6 sm:p-9"
          >
            {/* Full name */}
            <div className="animate-fade-up">
              <label
                htmlFor="student-name"
                className={`mb-2 block text-sm font-bold ${labelClass}`}
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="student-name"
                  name="name"
                  type="text"
                  value={student.name || ""}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "student-name-error" : undefined
                  }
                  className={`${inputClass} ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                />
              </div>

              {errors.name && (
                <p
                  id="student-name-error"
                  role="alert"
                  className="mt-2 text-sm font-medium text-red-500 animate-fade-in"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Mobile number */}
            <div className="animate-fade-up delay-100">
              <label
                htmlFor="student-phone"
                className={`mb-2 block text-sm font-bold ${labelClass}`}
              >
                Mobile Number{" "}
                <span className={`font-normal ${muted}`}>
                  (Optional)
                </span>
              </label>

              <div className="relative">
                <Phone
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="student-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={student.phone || ""}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  autoComplete="tel"
                  maxLength={20}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "student-phone-error" : undefined
                  }
                  className={`${inputClass} ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                />
              </div>

              {errors.phone && (
                <p
                  id="student-phone-error"
                  role="alert"
                  className="mt-2 text-sm font-medium text-red-500 animate-fade-in"
                >
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Gender dropdown */}
            <div className="animate-fade-up delay-200">
              <label
                htmlFor="student-gender"
                className={`mb-2 block text-sm font-bold ${labelClass}`}
              >
                Gender <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <Users
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  id="student-gender"
                  name="gender"
                  value={student.gender || ""}
                  onChange={handleGenderChange}
                  required
                  aria-invalid={Boolean(errors.gender)}
                  aria-describedby={
                    errors.gender ? "student-gender-error" : undefined
                  }
                  className={`${inputClass} cursor-pointer appearance-none pr-11 ${
                    errors.gender
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              {errors.gender && (
                <p
                  id="student-gender-error"
                  role="alert"
                  className="mt-2 text-sm font-medium text-red-500 animate-fade-in"
                >
                  {errors.gender}
                </p>
              )}
            </div>

            

            {/* Helpful information */}
            <div
              className={`animate-fade-up delay-300 rounded-2xl border p-4 transition-all duration-300 hover:shadow-md ${
                dark
                  ? "border-indigo-400/20 bg-indigo-500/10"
                  : "border-indigo-100 bg-indigo-50/80"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${
                    dark
                      ? "bg-slate-800 text-indigo-300"
                      : "bg-white text-indigo-600"
                  }`}
                >
                  <ShieldCheck size={20} />
                </div>

                <div className="min-w-0">
                  <p className={`text-sm font-bold ${heading}`}>
                    Check your details
                  </p>

                  <p className={`mt-1 text-sm leading-6 ${muted}`}>
                    Your name, gender, and other provided details can
                    be included in your exam result.
                  </p>
                </div>
              </div>
            </div>

            {/* General error */}
            {errors.form && (
              <p
                role="alert"
                className="rounded-xl bg-red-500/10 p-3 text-sm text-red-500 animate-fade-in"
              >
                {errors.form}
              </p>
            )}

            {/* Start exam button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/30 active:scale-[0.98] disabled:cursor-wait"
            >
              <span>
                {isSubmitting ? "Starting Exam..." : "Start Exam"}
              </span>

              {isSubmitting ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

            <p
              className={`flex items-center justify-center gap-2 text-center text-xs leading-5 ${muted}`}
            >
              <CircleHelp size={15} />
              Enter your correct details before starting.
            </p>

            <div
              className={`flex items-center justify-center gap-2 pt-1 text-xs font-medium ${muted}`}
            >
              <Sparkles size={14} className="text-violet-500" />
              Your exam journey starts here
            </div>
          </form>
        </div>

        <p className={`mt-5 text-center text-xs ${muted}`}>
          ExamPro · Prepare well, perform your best.
        </p>
      </section>
    </main>
  );
}
