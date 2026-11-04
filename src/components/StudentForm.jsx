import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  UserRound,
  Phone,
  Moon,
  Sun,
  Users,
  ChevronDown,
  CircleHelp,
  Sparkles,
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

  const inputClass = `w-full min-w-0 rounded-xl border py-3 pl-11 pr-4 text-sm outline-none transition focus:ring-4 ${
    dark
      ? "border-white/10 bg-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-500/15"
      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500/10"
  }`;

  const labelClass = dark ? "text-slate-200" : "text-slate-700";
  const mutedClass = dark ? "text-slate-400" : "text-slate-500";

  function handleChange(event) {
    const { name, value } = event.target;
    setStudent((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "", form: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    const cleanName = (student.name || "").trim();
    const cleanPhone = (student.phone || "").trim();
    const cleanGender = (student.gender || "").trim();

    if (cleanName.length < 2) {
      nextErrors.name = "Please enter your full name.";
    } else if (cleanName.length > 100) {
      nextErrors.name = "Name must be under 100 characters.";
    }

    if (!cleanGender) {
      nextErrors.gender = "Please select your gender.";
    }

    if (cleanPhone && !/^[0-9+\-()\s]{7,20}$/.test(cleanPhone)) {
      nextErrors.phone = "Please enter a valid mobile number.";
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setStudent((previous) => ({
      ...previous,
      name: cleanName,
      phone: cleanPhone,
      gender: cleanGender,
    }));

    setErrors({});
    setIsSubmitting(true);
    requestAnimationFrame(() => onContinue());
  }

  return (
    <main
      className={`relative flex h-[100dvh] w-full flex-col overflow-hidden px-3 py-3 transition-colors duration-700 sm:px-6 sm:py-4 ${
        dark
          ? "bg-gradient-to-br from-[#07131d] via-[#0b1724] to-[#10162b] text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900"
      }`}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div
          className={`absolute -left-24 top-10 h-56 w-56 animate-float rounded-full blur-[90px] ${
            dark ? "bg-cyan-400/15" : "bg-teal-400/25"
          }`}
        />
        <div
          className={`absolute -right-24 bottom-0 h-64 w-64 animate-float rounded-full blur-[100px] [animation-delay:1s] ${
            dark ? "bg-indigo-500/15" : "bg-cyan-400/20"
          }`}
        />
      </div>

      {/* Compact navigation */}
      <header className="relative z-10 mx-auto flex h-11 w-full max-w-5xl shrink-0 items-center justify-between animate-fade-down">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-x-1 ${
            dark
              ? "text-slate-300 hover:bg-white/5"
              : "text-slate-600 hover:bg-white"
          }`}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-600/20 transition-transform duration-300 hover:rotate-6 hover:scale-110">
            <GraduationCap size={19} />
          </div>
          <span className="font-extrabold">
            Exam<span className="text-teal-500">Pro</span>
          </span>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${
            dark
              ? "border-white/10 bg-slate-800 text-cyan-300 hover:bg-slate-700"
              : "border-slate-200 bg-white text-teal-700 hover:border-teal-200 hover:bg-teal-50"
          }`}
        >
          {dark ? (
            <Sun size={16} className="transition-transform duration-500 hover:rotate-45" />
          ) : (
            <Moon size={16} className="transition-transform duration-500 hover:-rotate-12" />
          )}
          <span className="hidden xs:inline">
            {dark ? "Light" : "Dark"}
          </span>
        </button>
      </header>

      {/* Form stays within the viewport */}
      <section className="relative z-10 flex min-h-0 flex-1 items-center justify-center py-2">
        <div
          className={`w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl transition-all duration-500 hover:-translate-y-0.5 sm:rounded-3xl animate-fade-up ${
            dark
              ? "border-white/10 bg-slate-900/90 shadow-black/30 backdrop-blur-xl"
              : "border-teal-100/80 bg-white/95 shadow-teal-900/10 backdrop-blur-xl"
          }`}
        >
          {/* Compact card heading */}
          <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-700 to-indigo-700 px-5 py-4 text-white sm:px-7 sm:py-5">
            <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border-[20px] border-white/10" />

            <div className="relative flex items-center gap-3 animate-fade-up delay-100">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 transition-transform duration-500 hover:rotate-6 hover:scale-110">
                <GraduationCap size={24} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
                  Step 01 · Registration
                </p>

                <h1 className="mt-0.5 text-2xl font-black tracking-tight sm:text-3xl">
                  Student Details
                </h1>

                <p className="mt-1 text-xs text-cyan-50 sm:text-sm">
                  Enter your details before starting the exam.
                </p>
              </div>
            </div>
          </div>

          {/* Registration form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-3 px-4 py-4 animate-fade-up delay-200 sm:space-y-4 sm:px-7 sm:py-5"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="student-name"
                className={`mb-1.5 block text-xs font-bold sm:text-sm ${labelClass}`}
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <UserRound
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-500/70"
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
                  className={`${inputClass} ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
              </div>

              {errors.name && (
                <p role="alert" className="mt-1 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone and Gender */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="min-w-0">
                <label
                  htmlFor="student-phone"
                  className={`mb-1.5 block text-xs font-bold sm:text-sm ${labelClass}`}
                >
                  Mobile Number{" "}
                  <span className={`font-normal ${mutedClass}`}>
                    (Optional)
                  </span>
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-500/70"
                  />

                  <input
                    id="student-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={student.phone || ""}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    autoComplete="tel"
                    maxLength={20}
                    aria-invalid={Boolean(errors.phone)}
                    className={`${inputClass} ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="student-gender"
                  className={`mb-1.5 block text-xs font-bold sm:text-sm ${labelClass}`}
                >
                  Gender <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Users
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-teal-500/70"
                  />

                  <select
                    id="student-gender"
                    name="gender"
                    value={student.gender || ""}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.gender)}
                    className={`${inputClass} cursor-pointer appearance-none pr-10 ${
                      errors.gender ? "border-red-500" : ""
                    }`}
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">
                      Prefer not to say
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>

                {errors.gender && (
                  <p role="alert" className="mt-1 text-xs text-red-500">
                    {errors.gender}
                  </p>
                )}
              </div>
            </div>

            {/* Information panel */}
            <div
              className={`flex items-center gap-3 rounded-xl border p-3 ${
                dark
                  ? "border-cyan-400/20 bg-cyan-500/10"
                  : "border-teal-100 bg-teal-50"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  dark
                    ? "bg-slate-800 text-cyan-300"
                    : "bg-white text-teal-600"
                }`}
              >
                <ShieldCheck size={19} />
              </div>

              <div className="min-w-0">
                <p
                  className={`text-xs font-bold sm:text-sm ${
                    dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Check your details
                </p>

                <p className={`text-[11px] leading-4 sm:text-xs ${mutedClass}`}>
                  Your provided details may be included in your exam result.
                </p>
              </div>
            </div>

            {/* General error */}
            {errors.form && (
              <p
                role="alert"
                className="rounded-lg bg-red-500/10 p-2 text-xs text-red-500"
              >
                {errors.form}
              </p>
            )}

            {/* Start Exam */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-600/25 active:scale-[0.98] disabled:cursor-wait"
            >
              <span>
                {isSubmitting ? "Starting Exam..." : "Start Exam"}
              </span>

              {isSubmitting ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>

            <div
              className={`flex items-center justify-center gap-2 text-center text-[10px] sm:text-xs ${mutedClass}`}
            >
              <CircleHelp size={13} />
              Enter your correct details before starting.
              <Sparkles size={13} className="text-teal-500 animate-pulse-soft" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}