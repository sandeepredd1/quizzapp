
const WHATSAPP_NUMBER = "919381783475";

/**
 * Creates a formatted exam result message.
 */
export function createResultMessage({ student, result, examName }) {
  const message = [
    "🎓 ONLINE EXAM RESULT",
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    "📚 EXAM DETAILS",
    `Exam Name: ${examName || "Online Exam"}`,
    "",
    "👨‍🎓 STUDENT DETAILS",
    `Name: ${student.name || "Not provided"}`,
    `Mobile: ${student.phone || "Not provided"}`,
    `Gender: ${student.gender || "Not provided"}`,
    `Class / Details: ${student.className || "Not provided"}`,
    "",
    "📊 EXAM PERFORMANCE",
    `Total Questions: ${result.total}`,
    `Correct Answers: ${result.correct}`,
    `Wrong Answers: ${result.wrong}`,
    `Skipped Questions: ${result.skipped}`,
    `Final Score: ${result.correct}/${result.total}`,
    `Percentage: ${result.percentage}%`,
    `Result Status: ${result.status}`,
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    "Thank you for completing the exam! 🎉",
  ];

  return message.join("\n");
}

/**
 * Opens WhatsApp with the result message prefilled.
 */
export function sendResultToWhatsApp({ student, result, examName }) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!/^\d{10,15}$/.test(phone)) {
    alert("Please check the WhatsApp number in whatsapp.js.");
    return;
  }

  const message = createResultMessage({
    student,
    result,
    examName,
  });

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
