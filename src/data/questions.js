export const examConfig = {
  appName: "UPSC EXAM",
  examName: "UPSC CSE Prelims - Mock Test",
  description: "50 UPSC Prelims-style questions across Polity, History, Geography, Economy, Environment, Science and Tech, and IR/Governance.",
  passingPercentage: 35,
  marksPerCorrect: 1,
  negativeMarks: 0.25,
  marksPerSkipped: 0,
  durationMinutes: 60,
};






const AR_OPTIONS = [
  "Both A and R are individually true, and R is the correct explanation of A",
  "Both A and R are individually true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];

export const questions = [
  // ==========================================
  // 1–10: INDIAN POLITY
  // ==========================================
  {
    id: 1,
    section: "Indian Polity",
    question: `With reference to the judicial limits on Parliament's amending power, consider the following statements:

1. In Minerva Mills (1980), the Supreme Court held that Parliament's limited power to amend the Constitution is itself part of the basic structure.
2. Clauses (4) and (5) inserted in Article 368 by the 42nd Amendment were struck down.
3. In Waman Rao (1981), the Court held that laws placed in the Ninth Schedule after 24 April 1973 are open to basic structure review.
4. In I.R. Coelho (2007), the Court held that laws placed in the Ninth Schedule after 24 April 1973 are completely immune from judicial review.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. I.R. Coelho (2007) held the opposite of statement 4: Ninth Schedule laws enacted after 24 April 1973 can be tested against Fundamental Rights and the basic structure."
  },

  {
    id: 2,
    section: "Indian Polity",
    question: `Consider the following statements regarding the Tenth Schedule (anti-defection law):

1. In Kihoto Hollohan (1992), the Supreme Court held Paragraph 7 invalid for want of ratification by States while upholding the rest of the Schedule.
2. An independent member elected to a House who joins a political party after the election is liable to disqualification.
3. A nominated member may join a political party within six months of taking his seat without incurring disqualification.
4. Decisions of the Presiding Officer under the Tenth Schedule are completely immune from judicial review.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 3 and 4 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. Kihoto Hollohan held the Presiding Officer's decision is subject to limited judicial review (for example, for mala fides or perversity), so statement 4 is incorrect."
  },

  {
    id: 3,
    section: "Indian Polity",
    question: `With reference to Article 356 and the S.R. Bommai judgment (1994), consider the following statements:

1. A Proclamation of President's Rule is subject to judicial review.
2. The State Legislative Assembly should not be dissolved until Parliament approves the Proclamation.
3. Secularism was treated as part of the basic structure of the Constitution.
4. Once approved by both Houses, a Proclamation under Article 356 continues for one year at a stretch.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 2 and 3 only",
      "2 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. Once approved, a Proclamation continues for six months at a time (extendable in six-month steps, subject to the limits in Article 356(5)), not one year at a stretch."
  },

  {
    id: 4,
    section: "Indian Polity",
    question: `Consider the following statements about Parliamentary Committees:

1. The Public Accounts Committee consists of 22 members: 15 from the Lok Sabha and 7 from the Rajya Sabha.
2. By constitutional mandate, the Chairman of the Public Accounts Committee must belong to the ruling party.
3. The Estimates Committee consists exclusively of members of the Lok Sabha.
4. The Committee on Public Undertakings has 22 members: 15 from the Lok Sabha and 7 from the Rajya Sabha.

How many of the statements given above are correct?`,
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. Statement 2 is incorrect: there is no constitutional mandate, and by convention (since 1967) the PAC Chairman is appointed from the Opposition."
  },

  {
    id: 5,
    section: "Indian Polity",
    question: `With reference to the removal of the Vice-President of India, consider the following statements:

1. A resolution for removal can be moved only in the Rajya Sabha, after at least 14 days' notice.
2. The resolution must be passed by a majority of all the then members of the Rajya Sabha.
3. The Lok Sabha must agree to the resolution by a two-thirds majority of members present and voting.
4. While acting as President, the Vice-President continues to perform the duties of the Chairman of the Rajya Sabha.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2 and 3 only",
      "3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 2 are correct. Under Article 67(b), the Lok Sabha only needs to agree by a simple majority. Under Article 65(2), the Vice-President acting as President does not perform the duties of Chairman of the Rajya Sabha."
  },

  {
    id: 6,
    section: "Indian Polity",
    question: `Consider the following statements regarding delimitation and representation:

1. The 42nd Amendment (1976) froze the inter-State allocation of Lok Sabha seats on the basis of the 1971 Census until the year 2000.
2. The 84th Amendment (2001) extended this freeze until the first Census taken after 2026.
3. The 87th Amendment (2003) provided for readjusting constituency boundaries on the basis of the 2001 Census without changing the number of seats allocated to each State.
4. The 106th Amendment (2023) provides that reservation for women in the Lok Sabha and State Assemblies will operate only after a delimitation exercise undertaken after the first relevant Census following its commencement.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 3,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "All four statements are correct and trace the constitutional history of the freeze on seat allocation and the conditional operation of women's reservation."
  },

  {
    id: 7,
    section: "Indian Polity",
    question: `Consider the following Assertion (A) and Reason (R):

Assertion (A): A law made after the commencement of the Constitution that violates a Fundamental Right is void ab initio and is not revived merely because the inconsistency is later removed by a constitutional amendment.

Reason (R): A pre-Constitution law inconsistent with a Fundamental Right is only overshadowed (eclipsed) by the right and becomes enforceable again once the inconsistency is removed.

Which one of the following is correct?`,
    options: AR_OPTIONS,
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Both statements are true (Deep Chand for post-Constitution laws; Bhikaji Narain Dhakras for the doctrine of eclipse on pre-Constitution laws). However, R contrasts the position of pre-Constitution laws and does not explain why post-Constitution laws are void ab initio."
  },

  {
    id: 8,
    section: "Indian Polity",
    question: `With reference to inter-State relations in India, consider the following statements:

1. Article 262 empowers Parliament to provide by law for the adjudication of disputes relating to waters of inter-State rivers.
2. Parliament may by law exclude the jurisdiction of the Supreme Court and other courts over such water disputes.
3. Under Article 263, the President may by order establish an Inter-State Council if it appears that public interests would be served.
4. Article 262 itself constitutes the Water Disputes Tribunals without the need for any parliamentary law.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 3 only",
      "1 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. Tribunals are created under a parliamentary law (the Inter-State River Water Disputes Act, 1956), not directly by Article 262."
  },

  {
    id: 9,
    section: "Indian Polity",
    question: `Consider the following pairs:

1. Shankari Prasad (1951) — Constitutional amendments are not "law" under Article 13
2. Golaknath (1967) — A constitutional amendment is "law" under Article 13(2)
3. Minerva Mills (1980) — Upheld the validity of Article 368(4) inserted by the 42nd Amendment
4. Kesavananda Bharati (1973) — Upheld Golaknath's holding that Parliament cannot amend Fundamental Rights

How many of the pairs given above are correctly matched?`,
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Only pairs 1 and 2 are correct. Minerva Mills struck down Article 368(4), and Kesavananda Bharati overruled Golaknath, holding that Parliament can amend Fundamental Rights but not the basic structure."
  },

  {
    id: 10,
    section: "Indian Polity",
    question: `With reference to the Legislative Councils of States, consider the following statements:

1. Parliament may by law create or abolish a Legislative Council if the Legislative Assembly passes a resolution by the special majority prescribed in Article 169.
2. Such a law is deemed to be an amendment of the Constitution for the purposes of Article 368.
3. One-sixth of the members of a Legislative Council are nominated by the Governor.
4. The strength of a Legislative Council cannot exceed one-third of the strength of the Legislative Assembly and cannot be less than 40, subject to exceptions.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 3 and 4 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. Under Article 169(3), a law creating or abolishing a Council is not deemed an amendment of the Constitution for the purposes of Article 368."
  },

  // ==========================================
  // 11–20: HISTORY, ART AND CULTURE
  // ==========================================
  {
    id: 11,
    section: "Ancient Indian History",
    question: `Consider the following statements about the Harappan civilisation:

1. Dholavira in Gujarat is notable for its elaborate system of water conservation and reservoirs.
2. Rakhigarhi in Haryana is among the largest Harappan sites in the subcontinent.
3. Kalibangan has yielded evidence of a ploughed field and fire altars.
4. The Harappan script has been conclusively deciphered with the help of a bilingual inscription.

Which of the statements given above are correct?`,
    options: [
      "1, 2, 3 and 4",
      "1 and 2 only",
      "1, 2 and 3 only",
      "3 and 4 only",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. The Harappan script remains undeciphered and no accepted bilingual inscription has been found."
  },

  {
    id: 12,
    section: "Ancient Indian History",
    question: `Consider the following pairs of Buddhist Councils with their place and patron:

1. First Council — Rajagriha — Ajatashatru
2. Second Council — Vaishali — Kalasoka
3. Third Council — Pataliputra — Kanishka
4. Fourth Council — Kundalvana (Kashmir) — Kanishka

Which one of the pairs given above is NOT correctly matched?`,
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "The Third Buddhist Council at Pataliputra was patronised by Ashoka (presided over by Moggaliputta Tissa), not Kanishka."
  },

  {
    id: 13,
    section: "Medieval Indian History",
    question: `Consider the following statements about early temple architecture in India:

1. The Shore Temple at Mamallapuram is a structural temple built under Pallava rule.
2. The Kailasa temple at Ellora was carved out of rock under the Rashtrakuta ruler Krishna I.
3. The Brihadisvara temple at Gangaikondacholapuram was built by Rajaraja I.
4. The Virupaksha temple at Pattadakal was built under the Chalukyas of Badami.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. The Gangaikondacholapuram temple was built by Rajendra I, whereas the Brihadisvara temple at Thanjavur was built by Rajaraja I."
  },

  {
    id: 14,
    section: "Medieval Indian History",
    question: `With reference to the Vijayanagara Empire, consider the following statements:

1. Krishnadevaraya's work Amuktamalyada was composed in Telugu.
2. The Battle of Talikota was fought in 1526 between Vijayanagara and the Bahmani Sultanate.
3. Under the Nayankara system, military chiefs held territories in return for military service to the king.
4. The Portuguese traveller Domingo Paes visited the empire during the reign of Achyutadevaraya.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 2 and 3 only",
      "2 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 3 are correct. The Battle of Talikota was fought in 1565 against a coalition of Deccan Sultanates, and Domingo Paes visited during Krishnadevaraya's reign."
  },

  {
    id: 15,
    section: "Medieval Indian History",
    question: `Consider the following statements about the Mughal revenue and administrative system:

1. Todar Mal's Dahsala system fixed revenue rates on the basis of average produce and prices over the preceding ten years.
2. Under the Mansabdari system, zat indicated personal rank and pay, while sawar indicated the number of cavalrymen to be maintained.
3. Mansabs were hereditary and passed automatically to the mansabdar's sons.
4. Jagirs were generally transferable to prevent mansabdars from developing local roots.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Mansabs were not hereditary; the emperor decided appointments and promotions."
  },

  {
    id: 16,
    section: "Modern Indian History",
    question: `Consider the following events of the 1930s:

1. Third Round Table Conference
2. Gandhi–Irwin Pact
3. Poona Pact
4. Communal Award

Which one of the following is the correct chronological sequence of these events (earliest first)?`,
    options: [
      "2-3-4-1",
      "2-4-3-1",
      "4-2-3-1",
      "2-4-1-3",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Gandhi–Irwin Pact (March 1931) → Communal Award (August 1932) → Poona Pact (September 1932) → Third Round Table Conference (November–December 1932)."
  },

  {
    id: 17,
    section: "Modern Indian History",
    question: `With reference to the Cabinet Mission (1946), consider the following statements:

1. It proposed a Union with three subjects (defence, foreign affairs and communications) and a grouping of provinces into sections.
2. The Constituent Assembly was to be indirectly elected by the provincial legislative assemblies.
3. It accepted the demand for a separate sovereign Pakistan.
4. It proposed that British paramountcy over the princely states would be transferred to the Union government.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 2 are correct. The Mission rejected a separate sovereign Pakistan, and it stated that paramountcy would lapse on independence and would not be transferred to the new government."
  },

  {
    id: 18,
    section: "Modern Indian History",
    question: `Consider the following pairs of uprisings and leaders:

1. Kol Uprising (1831–32) — Buddhu Bhagat
2. Anglo-Khasi War — U Tirot Sing
3. Paika Rebellion (1817) — Bakshi Jagabandhu
4. Pagal Panthi movement — Karam Shah and Tipu Shah

How many of the pairs given above are correctly matched?`,
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four",
    ],
    answer: 3,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "All four pairs are correctly matched."
  },

  {
    id: 19,
    section: "Art and Culture",
    question: `Consider the following statements about Indian classical dance traditions:

1. Sattriya was recognised as a classical dance by the Sangeet Natak Akademi in 2000.
2. Chhau is recognised as one of the classical dance forms by the Sangeet Natak Akademi.
3. Kathak absorbed Persian influences in the Mughal period and has gharanas such as Jaipur, Lucknow and Banaras.
4. The Tanjore Quartet systematised the repertoire (margam) of Bharatanatyam.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 3 and 4 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. Chhau is a traditional folk/martial-influenced dance form and is not among the eight classical dances recognised by the Sangeet Natak Akademi."
  },

  {
    id: 20,
    section: "Art and Culture",
    question: `Consider the following statements about UNESCO World Heritage inscriptions from India:

1. Dholavira was inscribed as a World Heritage Site in 2021.
2. The Rudreshwara (Ramappa) Temple was inscribed in 2021.
3. Santiniketan was inscribed in 2024.
4. The Moidams of Charaideo (Assam) were inscribed in 2024.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Santiniketan was inscribed in 2023, not 2024."
  },

  // ==========================================
  // 21–28: GEOGRAPHY
  // ==========================================
  {
    id: 21,
    section: "Geography",
    question: `Consider the following Assertion (A) and Reason (R):

Assertion (A): Western disturbances bring winter rainfall to north-western India that benefits Rabi crops such as wheat.

Reason (R): Western disturbances are extratropical cyclonic systems that originate in the Mediterranean region and are steered eastwards by the subtropical westerly jet stream.

Which one of the following is correct?`,
    options: AR_OPTIONS,
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Both statements are true and R correctly explains how the moisture-bearing systems reach north-western India."
  },

  {
    id: 22,
    section: "Geography",
    question: `Consider the following statements about Indian Ocean and Pacific climate phenomena:

1. The Somali Current reverses its direction seasonally with the monsoon winds.
2. During a positive Indian Ocean Dipole, sea surface temperatures are cooler than normal in the western Indian Ocean and warmer in the east.
3. During El Niño, the Walker circulation over the Pacific strengthens.
4. A positive Indian Ocean Dipole is generally associated with enhanced Indian monsoon rainfall and can offset the effect of El Niño.

Which of the statements given above are correct?`,
    options: [
      "1 and 4 only",
      "1, 2 and 4 only",
      "2 and 3 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 4 are correct. In a positive IOD the western Indian Ocean is warmer and the eastern cooler, and El Niño is associated with a weakening of the Walker circulation."
  },

  {
    id: 23,
    section: "Geography",
    question: `Consider the following statements about the Himalayas:

1. The Siwalik is the youngest and outermost Himalayan range, composed largely of unconsolidated sediments.
2. Duns are longitudinal valleys lying between the Lesser Himalaya and the Siwaliks.
3. Karewas are lacustrine deposits found in the Kashmir Valley.
4. The Himadri (Greater Himalaya) has a core of granite and crystalline rocks and contains the highest peaks.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 3,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "All four statements are correct."
  },

  {
    id: 24,
    section: "Geography",
    question: `Consider the following statements regarding jet streams:

1. The northward shift of the subtropical westerly jet stream in early summer is associated with the onset of the Indian monsoon.
2. The Tropical Easterly Jet is a winter phenomenon over India.
3. Jet streams are narrow bands of very strong winds located near the tropopause.
4. The subtropical westerly jet stream blows from east to west.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 3 only",
      "2 and 4 only",
      "1 and 3 only",
      "1, 3 and 4 only",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 3 are correct. The Tropical Easterly Jet is a summer phenomenon associated with the monsoon, and westerly jets blow from west to east."
  },

  {
    id: 25,
    section: "Geography",
    question: `Consider the following statements about landforms:

1. Uvalas are formed by the coalescence of several sinkholes in karst regions.
2. Zeugen are table-like rock masses with a resistant cap rock, sculpted by wind abrasion.
3. Yardangs are streamlined ridges aligned with the prevailing wind, formed by abrasion.
4. Inselbergs are depositional features of arid regions formed by wind-borne sand.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. Inselbergs are isolated residual rock hills left by erosion, not depositional sand features."
  },

  {
    id: 26,
    section: "Geography",
    question: `Consider the following pairs of mountain passes and the region in which they lie:

1. Shipki La — Himachal Pradesh
2. Lipulekh — Uttarakhand
3. Bomdila — Arunachal Pradesh
4. Nathu La — Arunachal Pradesh

How many of the pairs given above are correctly matched?`,
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Pairs 1, 2 and 3 are correct. Nathu La is in Sikkim."
  },

  {
    id: 27,
    section: "Geography",
    question: `Consider the following statements about oceans:

1. Surface salinity in the open ocean is highest at the equator because of intense evaporation.
2. Spring tides occur around the new moon and full moon.
3. Neap tides occur when the Sun and the Moon are at right angles to the Earth.
4. The Baltic Sea has low salinity because of heavy river inflow, low evaporation and restricted connection to the open ocean.

Which of the statements given above are correct?`,
    options: [
      "2 and 3 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 2, 3 and 4 are correct. Open-ocean salinity peaks in the subtropics, not at the equator, where heavy rainfall lowers it."
  },

  {
    id: 28,
    section: "Geography",
    question: `Consider the following pairs of straits and the water bodies they connect:

1. Palk Strait — Bay of Bengal and Arabian Sea
2. Strait of Hormuz — Persian Gulf and Gulf of Oman
3. Bab-el-Mandeb — Red Sea and Gulf of Aden
4. Strait of Malacca — Andaman Sea and South China Sea

Which one of the pairs given above is NOT correctly matched?`,
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "The Palk Strait connects the Palk Bay (Bay of Bengal side) with the Gulf of Mannar; it does not connect the Bay of Bengal with the Arabian Sea."
  },

  // ==========================================
  // 29–36: INDIAN ECONOMY
  // ==========================================
  {
    id: 29,
    section: "Indian Economy",
    question: `Consider the following statements about India's monetary policy framework:

1. The repo rate is the rate at which the RBI lends to banks against government securities as collateral.
2. The Standing Deposit Facility (SDF) allows banks to park surplus liquidity with the RBI without collateral and forms the floor of the LAF corridor.
3. The Marginal Standing Facility (MSF) rate is set below the repo rate.
4. The Monetary Policy Committee has six members, and the Governor has a casting vote in case of a tie.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. The MSF rate is set above the repo rate and forms the upper bound of the policy corridor."
  },

  {
    id: 30,
    section: "Indian Economy",
    question: `Consider the following statements about the Goods and Services Tax (GST):

1. The GST Council is a constitutional body under Article 279A.
2. Article 246A gives Parliament and State Legislatures concurrent power to make laws on GST.
3. Decisions in the GST Council are taken by a simple majority of members present and voting.
4. Alcohol for human consumption is currently subject to GST.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "2 and 3 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 2 are correct. GST Council decisions need a three-fourths weighted majority (Centre one-third, States two-thirds of votes), and alcohol for human consumption is outside GST."
  },

  {
    id: 31,
    section: "Indian Economy",
    question: `Consider the following statements regarding government funds in India:

1. The Contingency Fund of India is established under Article 267 and is placed at the disposal of the President.
2. All revenues received by the Union Government and loans raised by it form part of the Consolidated Fund of India.
3. Money can be withdrawn from the Public Account of India only after a prior Appropriation Act is passed.
4. Expenditure charged on the Consolidated Fund is not submitted to the vote of Parliament, although it can be discussed.

Which of the statements given above are correct?`,
    options: [
      "2, 3 and 4 only",
      "1, 2 and 3 only",
      "1, 2 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Withdrawals from the Public Account are made without a parliamentary appropriation, as the Government acts largely as a banker there."
  },

  {
    id: 32,
    section: "Indian Economy",
    question: `In an economy, the following data are given: GDP at market prices = ₹100 crore; depreciation (consumption of fixed capital) = ₹10 crore; net indirect taxes = ₹8 crore; net factor income from abroad = ₹2 crore. What is the National Income (NNP at factor cost)?`,
    options: [
      "₹80 crore",
      "₹84 crore",
      "₹92 crore",
      "₹100 crore",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "NNP at market prices = 100 − 10 + 2 = ₹92 crore. NNP at factor cost = 92 − 8 (net indirect taxes) = ₹84 crore."
  },

  {
    id: 33,
    section: "Indian Economy",
    question: `Consider the following statements:

1. The Minimum Support Price is announced by the Government of India on the recommendation of the Commission for Agricultural Costs and Prices (CACP).
2. The CACP is a statutory body established by an Act of Parliament.
3. The National Food Security Act, 2013 provides coverage for up to 75% of the rural and 50% of the urban population.
4. Priority households are entitled to 5 kg of foodgrains per person per month, while Antyodaya Anna Yojana households receive 35 kg per household per month.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 3 and 4 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. The CACP is an attached office of the Ministry of Agriculture and Farmers Welfare, not a statutory body created by an Act."
  },

  {
    id: 34,
    section: "Indian Economy",
    question: `Consider the following statements about the external sector:

1. The Indian rupee is fully convertible on the capital account.
2. Investment by a foreign portfolio investor in an Indian company beyond the 10% threshold of post-issue paid-up equity is treated as FDI.
3. External Commercial Borrowings are regulated under the Foreign Exchange Management Act, 1999.
4. The Special Drawing Right is an international reserve asset created by the IMF whose value is based on a basket of currencies.

Which of the statements given above are correct?`,
    options: [
      "2 and 3 only",
      "2, 3 and 4 only",
      "1, 2 and 3 only",
      "1 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 2, 3 and 4 are correct. The rupee is not fully convertible on the capital account; capital account convertibility is partial and subject to regulation."
  },

  {
    id: 35,
    section: "Indian Economy",
    question: `Consider the following Assertion (A) and Reason (R):

Assertion (A): Currency depreciation can raise domestic inflation in an import-dependent economy.

Reason (R): Currency depreciation lowers the domestic-currency price of imported goods.

Which one of the following is correct?`,
    options: AR_OPTIONS,
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "A is true because imported inputs and goods become costlier in domestic currency. R is false: depreciation raises the domestic-currency price of imports."
  },

  {
    id: 36,
    section: "Indian Economy",
    question: `Consider the following statements about the Human Development Index (HDI):

1. The HDI was introduced by the UNDP in 1990, drawing on the work of Mahbub ul Haq and Amartya Sen.
2. The income dimension of the HDI is measured by GDP per capita at current market exchange rates.
3. The HDI is computed using the arithmetic mean of the three dimension indices.
4. The Inequality-adjusted HDI discounts the HDI value for inequality in the distribution of health, education and income.

Which of the statements given above are correct?`,
    options: [
      "1 and 4 only",
      "1, 2 and 3 only",
      "2 and 3 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 4 are correct. The HDI uses GNI per capita (PPP) for income and, since 2010, aggregates the three dimension indices with a geometric mean."
  },

  // ==========================================
  // 37–42: ENVIRONMENT AND ECOLOGY
  // ==========================================
  {
    id: 37,
    section: "Environment and Ecology",
    question: `Consider the following statements regarding global biodiversity governance:

1. The Nagoya Protocol concerns access to genetic resources and the fair and equitable sharing of benefits arising from their utilisation.
2. The Cartagena Protocol primarily regulates access and benefit-sharing for genetic resources.
3. The Kunming–Montreal Global Biodiversity Framework includes a target to conserve at least 30% of land and sea areas by 2030.
4. The Aichi Biodiversity Targets were adopted at the CBD COP10 held in Nagoya in 2010.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. The Cartagena Protocol deals with the safe handling, transport and use of living modified organisms (biosafety)."
  },

  {
    id: 38,
    section: "Environment and Ecology",
    question: `Consider the following statements regarding the Wildlife (Protection) Act, 1972:

1. The 2002 Amendment introduced Conservation Reserves and Community Reserves.
2. The 2022 Amendment reduced the number of Schedules from six to four.
3. The 2022 Amendment gave statutory backing for implementing CITES.
4. Only the Union Government can notify a Wildlife Sanctuary.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 3 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 3 are correct. State Governments can notify Wildlife Sanctuaries and National Parks, so statement 4 is incorrect."
  },

  {
    id: 39,
    section: "Environment and Ecology",
    question: `Consider the following statements regarding the Paris Agreement and India's climate commitments:

1. The Agreement aims to hold the global temperature rise well below 2°C and pursue efforts to limit it to 1.5°C above pre-industrial levels.
2. The emission targets in each country's NDC are legally binding under international law, and failure to meet them attracts penalties.
3. Article 6 provides for cooperative approaches, including carbon market mechanisms.
4. India's updated NDC (2022) includes a target of reducing the emissions intensity of GDP by 45% from 2005 levels by 2030.

Which of the statements given above are correct?`,
    options: [
      "2 and 4 only",
      "1, 2 and 3 only",
      "1, 2, 3 and 4",
      "1, 3 and 4 only",
    ],
    answer: 3,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. Parties have binding procedural obligations (preparing and communicating NDCs), but the Agreement does not make NDC targets legally enforceable with penalties."
  },

  {
    id: 40,
    section: "Environment and Ecology",
    question: `Consider the following statements about ecological succession:

1. Primary succession begins on a surface that has never supported a community, such as bare rock.
2. Lichens are typical pioneer species in the succession on bare rock.
3. The climax community of a region is determined exclusively by climate, irrespective of soil, topography and disturbance.
4. An ecotone often shows the "edge effect", with greater species density than the adjoining communities.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 4 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Statement 3 reflects the monoclimax view; the polyclimax view recognises that soil, topography and disturbance also shape climax communities."
  },

  {
    id: 41,
    section: "Environment and Ecology",
    question: `Consider the following pairs of species and their IUCN Red List status:

1. Great Indian Bustard — Critically Endangered
2. Snow Leopard — Endangered
3. Red Panda — Vulnerable
4. Gharial — Critically Endangered

How many of the pairs given above are correctly matched?`,
    options: [
      "Only one",
      "Only two",
      "Only three",
      "All four",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Only pairs 1 and 4 are correct. The Snow Leopard is listed as Vulnerable and the Red Panda as Endangered."
  },

  {
    id: 42,
    section: "Environment and Ecology",
    question: `Consider the following statements about Biosphere Reserves in India:

1. The core zone is legally protected and is kept free from human activity.
2. The buffer zone allows no research, monitoring or ecotourism.
3. The transition zone permits human settlements and sustainable economic activities.
4. Biosphere Reserves in India are declared under the Wildlife (Protection) Act, 1972.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 2 and 3 only",
      "2 and 4 only",
      "3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 3 are correct. The buffer zone permits research, monitoring and managed activities, and Biosphere Reserves are designated by the Government under the MAB programme framework rather than declared under the Wildlife (Protection) Act."
  },

  // ==========================================
  // 43–46: SCIENCE AND TECHNOLOGY
  // ==========================================
  {
    id: 43,
    section: "Science and Technology",
    question: `Consider the following statements about India's space missions:

1. Chandrayaan-3 landed near the lunar south polar region in August 2023.
2. Aditya-L1 is positioned at the Sun–Earth L2 Lagrange point.
3. XPoSat is designed to study X-ray polarisation from cosmic sources.
4. NISAR is a joint NASA–ISRO Earth-observation mission carrying L-band and S-band radars.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 4 only",
      "1 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 3,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 3 and 4 are correct. Aditya-L1 is placed in a halo orbit around the Sun–Earth L1 point, not L2."
  },

  {
    id: 44,
    section: "Science and Technology",
    question: `Consider the following statements about biotechnology:

1. mRNA vaccines deliver genetic instructions that lead host cells to produce an antigen, without altering the host's genome.
2. Lipid nanoparticles are commonly used to deliver mRNA into cells.
3. A gene drive is a technology that can bias inheritance, and it is possible only in plants.
4. Bt cotton is the only genetically modified crop approved for commercial cultivation in India.

Which of the statements given above are correct?`,
    options: [
      "1, 2, 3 and 4",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
    ],
    answer: 3,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Gene drives have been studied mainly in insects such as mosquitoes and are not limited to plants."
  },

  {
    id: 45,
    section: "Science and Technology",
    question: `Consider the following statements about quantum technologies:

1. The National Quantum Mission was approved by the Union Cabinet in April 2023.
2. A qubit can exist in a superposition of states.
3. Quantum computers can already break all modern encryption, including every quantum key distribution scheme.
4. Shor's algorithm can, in principle, factorise large integers efficiently on a sufficiently powerful quantum computer.

Which of the statements given above are correct?`,
    options: [
      "1, 2 and 4 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Current quantum computers cannot break all encryption, and quantum key distribution is designed to be secure through the laws of physics."
  },

  {
    id: 46,
    section: "Science and Technology",
    question: `Consider the following diseases:

1. Chikungunya
2. Dengue
3. Zika virus disease
4. Japanese encephalitis

Which of the diseases given above are transmitted primarily by Aedes mosquitoes?`,
    options: [
      "1, 2, 3 and 4",
      "1, 2 and 3 only",
      "3 and 4 only",
      "1 and 4 only",
    ],
    answer: 1,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Chikungunya, dengue and Zika are transmitted mainly by Aedes mosquitoes. Japanese encephalitis is transmitted mainly by Culex mosquitoes."
  },

  // ==========================================
  // 47–50: INTERNATIONAL RELATIONS AND GOVERNANCE
  // ==========================================
  {
    id: 47,
    section: "International Relations",
    question: `Consider the following statements about the Shanghai Cooperation Organisation (SCO):

1. India and Pakistan became full members in 2017.
2. Iran became a full member in 2023.
3. Afghanistan is a full member of the SCO.
4. Belarus became a full member in 2024.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
      "1, 2, 3 and 4",
    ],
    answer: 2,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1, 2 and 4 are correct. Afghanistan has held observer status and is not a full member."
  },

  {
    id: 48,
    section: "International Relations",
    question: `Consider the following statements about India's connectivity initiatives:

1. The India–Middle East–Europe Economic Corridor (IMEC) was announced at the G20 Summit in New Delhi in 2023.
2. The Kaladan Multi-Modal Transit Transport Project links Kolkata with Sittwe port in Myanmar.
3. Chabahar port is located on the Gulf of Aden.
4. The International North–South Transport Corridor does not involve Iran.

Which of the statements given above are correct?`,
    options: [
      "1 and 2 only",
      "1, 2 and 4 only",
      "3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 2 are correct. Chabahar lies on the Gulf of Oman in Iran, and the INSTC runs through Iran."
  },

  {
    id: 49,
    section: "Governance and Public Policy",
    question: `Consider the following statements:

1. The Lokpal's jurisdiction over the Prime Minister extends to allegations relating to international relations, external and internal security, public order, atomic energy and space.
2. The Central Vigilance Commission is a statutory body under the CVC Act, 2003.
3. The Comptroller and Auditor General can be removed from office in the same manner and on the same grounds as a Judge of the Supreme Court.
4. The Chairperson of the Lokpal must always be a former Chief Justice of India.

Which of the statements given above are correct?`,
    options: [
      "2 and 3 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 2 and 3 are correct. Those subjects are excluded from the Lokpal's jurisdiction over the Prime Minister, and the Chairperson may be a former CJI, a former Supreme Court Judge, or an eminent person who meets the Act's criteria."
  },

  {
    id: 50,
    section: "Governance and Public Policy",
    question: `Consider the following statements about recent legal reforms:

1. The Digital Personal Data Protection Act, 2023 provides for the establishment of a Data Protection Board of India.
2. The Bharatiya Nyaya Sanhita, 2023 came into force on 1 January 2024.
3. The Bharatiya Nagarik Suraksha Sanhita, 2023 replaced the Code of Criminal Procedure, 1973.
4. The Bharatiya Nyaya Sanhita retains the offence of sedition as Section 124A.

Which of the statements given above are correct?`,
    options: [
      "1 and 3 only",
      "1, 2 and 3 only",
      "3 and 4 only",
      "1, 3 and 4 only",
    ],
    answer: 0,
    marks: 2,
    negativeMarks: 0.66,
    explanation: "Statements 1 and 3 are correct. The new criminal codes came into force on 1 July 2024, and the BNS does not retain Section 124A sedition; Section 152 addresses acts endangering the sovereignty, unity and integrity of India."
  },
];

export default questions;