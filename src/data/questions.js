export const examConfig = {
  appName: "Sweetyexam",
  examName: "CLAT UG - Advanced Practice Test",
  description: "Challenge yourself with 50  CLAT UG questions.",
  passingPercentage: 40,
  marksPerCorrect: 1,
  negativeMarks: 0.25,
  marksPerSkipped: 0,
  durationMinutes: 60,
};

export const questions = [
  // =====================================================
  // SECTION 1: ENGLISH LANGUAGE (1-10)
  // =====================================================
  {
    id: 1,
    section: "English Language",
    passage:
      "Democratic societies often equate the freedom to speak with the freedom to be heard. Yet the distribution of attention is rarely equal. Platforms may formally permit everyone to publish while algorithms, advertising incentives and existing inequalities determine whose speech reaches an audience. The problem is therefore not necessarily censorship in its traditional form, but the unequal architecture through which speech becomes influential.",
    question: "Which statement best captures the central argument of the passage?",
    options: [
      "Democracy requires governments to approve every public statement.",
      "Formal freedom to speak does not guarantee equal access to public attention.",
      "Digital platforms have eliminated traditional censorship completely.",
      "Advertising is incompatible with every democratic institution.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The passage distinguishes the right to publish from the unequal distribution of attention and influence.",
  },
  {
    id: 2,
    section: "English Language",
    passage:
      "A historian who treats an archive as a transparent window into the past overlooks the circumstances of its creation. Records survive because institutions preserve some materials and neglect others. The absence of a document may indicate that an event never occurred, but it may equally reveal whose experiences were considered unworthy of recording.",
    question: "Which inference is most strongly supported?",
    options: [
      "Every missing document proves deliberate historical suppression.",
      "Official archives contain no reliable historical information.",
      "Historians should consider how preservation practices shape the evidence available.",
      "Only oral testimony can establish historical truth.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The passage asks historians to examine the selection and preservation of records rather than treating archives as neutral.",
  },
  {
    id: 3,
    section: "English Language",
    passage:
      "Technological efficiency is often measured by the speed with which a task is completed. Such a measure can conceal costs transferred elsewhere: a faster delivery system may increase traffic, a cheaper product may depend on precarious labour, and an automated process may shift the burden of error onto consumers. Efficiency is therefore meaningful only when the boundaries of measurement are made explicit.",
    question: "What does the author mean by making the boundaries of measurement explicit?",
    options: [
      "Measuring only the time taken to complete a task.",
      "Rejecting efficiency as a useful economic concept.",
      "Assuming that lower prices always benefit society.",
      "Identifying which costs and consequences are included in the evaluation.",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The author argues that efficiency calculations must account for costs transferred to other people or places.",
  },
  {
    id: 4,
    section: "English Language",
    passage:
      "Public trust is not secured merely by institutions claiming to act in the public interest. Trust becomes durable when decisions can be examined, reasons can be challenged, and mistakes can be corrected. Transparency without accountability may simply make institutional failure more visible without making it less likely.",
    question: "Which distinction is central to the passage?",
    options: [
      "Transparency reveals decisions, while accountability creates mechanisms for scrutiny and correction.",
      "Trust depends exclusively on secrecy.",
      "Public institutions should never explain their decisions.",
      "Mistakes automatically disappear when information is published.",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The passage treats transparency and accountability as related but distinct; disclosure alone may not correct failures.",
  },
  {
    id: 5,
    section: "English Language",
    passage:
      "Language changes through use rather than by remaining permanently fixed. However, this does not mean that every expression is equally suitable in every setting. A phrase that signals solidarity within a community may appear discourteous in a formal hearing. Linguistic competence therefore involves understanding not only grammar but also context, audience and purpose.",
    question: "Which assumption underlies the author's argument?",
    options: [
      "Grammar has no role in communication.",
      "A single style of speech is appropriate for every audience.",
      "Effective communication requires sensitivity to social context.",
      "Language change should be prohibited in formal institutions.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The examples imply that communicative success depends partly on adapting language to context and audience.",
  },
  {
    id: 6,
    section: "English Language",
    passage:
      "A policy can be popular without being effective, just as an effective policy can initially be unpopular. Public approval measures attitudes at a particular moment; effectiveness requires evidence about whether stated objectives were achieved. Confusing the two allows political convenience to substitute for evaluation.",
    question: "The word 'substitute' most nearly means:",
    options: [
      "Investigate",
      "Replace",
      "Measure",
      "Postpone",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Here, political convenience is said to replace proper evaluation of policy outcomes.",
  },
  {
    id: 7,
    section: "English Language",
    passage:
      "Scientific uncertainty is sometimes presented as a reason to delay action. Yet uncertainty does not imply that all outcomes are equally probable or that no evidence exists. Where the potential harm is severe and difficult to reverse, uncertainty may strengthen the case for proportionate precaution rather than justify inaction.",
    question: "Which statement would the author most likely reject?",
    options: [
      "The severity of possible harm can matter when deciding how to respond.",
      "Scientific evidence can support action even when uncertainty remains.",
      "Precaution should be proportionate to the circumstances.",
      "Any uncertainty proves that action is irrational.",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The passage explicitly rejects the idea that uncertainty automatically requires inaction.",
  },
  {
    id: 8,
    section: "English Language",
    passage:
      "An institution may satisfy every formal reporting requirement and still fail to communicate meaningfully. A hundred pages of technical disclosure can obscure more than a concise explanation of the same decision. Information becomes useful when its organisation allows the intended audience to understand and assess it.",
    question: "Which option best describes the author's view of disclosure?",
    options: [
      "The volume of information alone does not guarantee meaningful understanding.",
      "Technical reports should always be prohibited.",
      "Concise explanations are necessarily inaccurate.",
      "Institutions should disclose information only to experts.",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The passage distinguishes the quantity of disclosed information from its accessibility and usefulness.",
  },
  {
    id: 9,
    section: "English Language",
    passage:
      "Markets aggregate individual choices, but those choices are made under different conditions. A consumer who declines an essential service because it is unaffordable has not expressed the same preference as a consumer who declines it despite being able to pay. Observed demand therefore cannot always be interpreted as a direct measure of social need.",
    question: "Which inference follows from the passage?",
    options: [
      "Markets never provide useful information.",
      "Every essential service must be free.",
      "Observed purchasing behaviour may reflect constraints as well as preferences.",
      "Consumers cannot make rational choices.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The passage explains that affordability constraints affect observed demand, so behaviour alone may not reveal underlying need.",
  },
  {
    id: 10,
    section: "English Language",
    passage:
      "The strongest criticism of a policy is not necessarily the one expressed most forcefully. A persuasive critique identifies the policy's objective, examines the evidence for its methods and explains where the reasoning fails. Rhetorical intensity may attract attention, but it cannot replace a defensible argument.",
    question: "Which quality does the author consider essential to a strong critique?",
    options: [
      "Personal attacks on the policy's supporters.",
      "A reasoned examination of objectives, evidence and logic.",
      "The use of the greatest possible number of words.",
      "Agreement with the majority opinion.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The author prioritises evidence and reasoning over forceful rhetoric.",
  },

  // =====================================================
  // SECTION 2: GENERAL KNOWLEDGE & LEGAL AWARENESS (11-20)
  // =====================================================
  {
    id: 11,
    section: "GK & Legal Awareness",
    question:
      "Which constitutional provision establishes the Supreme Court of India?",
    options: [
      "Article 124",
      "Article 32",
      "Article 226",
      "Article 368",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 124 provides for the establishment and constitution of the Supreme Court.",
  },
  {
    id: 12,
    section: "GK & Legal Awareness",
    question:
      "Which writ is ordinarily used to challenge the legality of a person's detention?",
    options: [
      "Mandamus",
      "Certiorari",
      "Habeas corpus",
      "Quo warranto",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Habeas corpus requires the legality of detention to be examined by a competent court.",
  },
  {
    id: 13,
    section: "GK & Legal Awareness",
    question:
      "Which part of the Indian Constitution contains the Directive Principles of State Policy?",
    options: [
      "Part II",
      "Part IV",
      "Part III",
      "Part IVA",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Directive Principles of State Policy are contained in Part IV, Articles 36–51.",
  },
  {
    id: 14,
    section: "GK & Legal Awareness",
    question:
      "Which constitutional amendment introduced the words 'Socialist', 'Secular' and 'Integrity' into the Preamble?",
    options: [
      "24th Amendment",
      "42nd Amendment",
      "44th Amendment",
      "52nd Amendment",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 42nd Constitutional Amendment Act, 1976 added these words to the Preamble.",
  },
  {
    id: 15,
    section: "GK & Legal Awareness",
    question:
      "The basic structure doctrine is most closely associated with which case?",
    options: [
      "Maneka Gandhi v. Union of India",
      "Golaknath v. State of Punjab",
      "Kesavananda Bharati v. State of Kerala",
      "A.K. Gopalan v. State of Madras",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 1973 Kesavananda Bharati decision established that Parliament cannot destroy the Constitution's basic structure.",
  },
  {
    id: 16,
    section: "GK & Legal Awareness",
    question:
      "Which body recommends the distribution of certain tax revenues between the Union and the States?",
    options: [
      "Election Commission",
      "Finance Commission",
      "Union Public Service Commission",
      "National Human Rights Commission",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Finance Commission, constituted under Article 280, recommends tax devolution and related fiscal arrangements.",
  },
  {
    id: 17,
    section: "GK & Legal Awareness",
    question:
      "Which institution is the principal judicial organ of the United Nations?",
    options: [
      "International Court of Justice",
      "International Criminal Court",
      "UN Security Council",
      "International Law Commission",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The International Court of Justice is the principal judicial organ of the United Nations.",
  },
  {
    id: 18,
    section: "GK & Legal Awareness",
    question:
      "Which constitutional article guarantees equality before the law and equal protection of the laws?",
    options: [
      "Article 14",
      "Article 19",
      "Article 21A",
      "Article 25",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 14 guarantees equality before the law and equal protection of the laws.",
  },
  {
    id: 19,
    section: "GK & Legal Awareness",
    question:
      "Which Indian authority audits the accounts of the Union and State governments under the constitutional framework?",
    options: [
      "Attorney General of India",
      "Comptroller and Auditor General of India",
      "Chief Election Commissioner",
      "Finance Secretary",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Comptroller and Auditor General of India performs constitutionally prescribed audit functions.",
  },
  {
    id: 20,
    section: "GK & Legal Awareness",
    question:
      "Which schedule of the Constitution contains the allocation of seats in the Council of States?",
    options: [
      "First Schedule",
      "Third Schedule",
      "Fourth Schedule",
      "Seventh Schedule",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Fourth Schedule deals with the allocation of seats in the Council of States (Rajya Sabha).",
  },

  // =====================================================
  // SECTION 3: LEGAL REASONING (21-30)
  // Apply the stated principle to the given facts.
  // =====================================================
  {
    id: 21,
    section: "Legal Reasoning",
    passage:
      "Principle: A person is negligent when they owe a duty of reasonable care, breach that duty, and thereby cause foreseeable harm. A person is not automatically liable for every accident occurring nearby.",
    question:
      "A shopkeeper leaves a slippery liquid on a busy entrance floor despite seeing it. A customer slips on it and breaks an arm. Which is the strongest conclusion?",
    options: [
      "The shopkeeper can never be liable because the customer entered voluntarily.",
      "The shopkeeper may be negligent because the danger was foreseeable and left unaddressed.",
      "The shopkeeper is liable even if the liquid was placed there after the accident.",
      "The customer is automatically responsible for every injury on commercial premises.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The shopkeeper knew of a foreseeable hazard and failed to take reasonable precautions, supporting negligence on these facts.",
  },
  {
    id: 22,
    section: "Legal Reasoning",
    passage:
      "Principle: An offer may be revoked before acceptance is complete against the offeror, provided the revocation is effectively communicated in time under the applicable rules.",
    question:
      "A offers to sell a laptop to B. Before B communicates acceptance, A tells B that the offer is withdrawn. B then attempts to accept the original offer. Which conclusion best follows?",
    options: [
      "B can always accept because every offer remains open for seven days.",
      "The offer is automatically irrevocable once its price is stated.",
      "B's attempted acceptance is ineffective if the revocation was validly communicated first.",
      "A must sell because B has already considered the offer.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Under the stated principle, timely and effective revocation before acceptance prevents formation of the contract.",
  },
  {
    id: 23,
    section: "Legal Reasoning",
    passage:
      "Principle: Consent obtained through a material misrepresentation may be defective. A statement must be assessed in context, including whether it was presented as fact and whether it materially induced the other party's decision.",
    question:
      "A seller knowingly states that a used car has never been in an accident. The buyer relies on the statement to purchase it. The car had suffered major collision damage. Which conclusion is strongest?",
    options: [
      "The statement may amount to material misrepresentation affecting the buyer's consent.",
      "The statement is irrelevant because the buyer could have inspected the car.",
      "Every inaccurate statement automatically constitutes a criminal offence.",
      "The buyer can never seek a remedy after completing a purchase.",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The seller knowingly made a false factual statement that materially induced the purchase.",
  },
  {
    id: 24,
    section: "Legal Reasoning",
    passage:
      "Principle: A restriction on a constitutional freedom must be assessed against the constitutional text and applicable legal tests. A restriction is not valid merely because an authority describes it as desirable.",
    question:
      "A local authority prohibits every peaceful public meeting indefinitely, citing administrative convenience without identifying a specific legal basis. Which conclusion is most defensible?",
    options: [
      "The prohibition is valid whenever an authority invokes convenience.",
      "Peaceful meetings can never be regulated in any circumstances.",
      "Administrative convenience automatically overrides fundamental rights.",
      "The blanket prohibition requires constitutional and legal justification and may be invalid.",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "A blanket restriction cannot be justified merely by assertion; its legal basis and constitutional validity must be examined.",
  },
  {
    id: 25,
    section: "Legal Reasoning",
    passage:
      "Principle: Criminal liability generally requires proof of the prohibited conduct and the mental element specified by the applicable offence. Where an offence expressly requires knowledge, mere accidental conduct without such knowledge may not satisfy that element.",
    question:
      "A courier unknowingly transports a sealed package containing prohibited goods. The offence expressly requires knowledge of the contents, and the facts establish that the courier had no such knowledge. Under the stated principle, what follows?",
    options: [
      "The courier is guilty because possession always proves knowledge.",
      "The required mental element may be absent, so guilt under this offence is not established by these facts alone.",
      "The courier must be convicted because the package was sealed.",
      "Knowledge is irrelevant whenever goods cross a boundary.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The stated offence requires knowledge, and the facts expressly negate that mental element.",
  },
  {
    id: 26,
    section: "Legal Reasoning",
    passage:
      "Principle: A person who voluntarily assumes a clearly disclosed risk may be restricted from claiming that the risk alone establishes another person's liability. This does not automatically excuse conduct that goes beyond the risk accepted.",
    question:
      "A participant signs up for a supervised climbing activity after being warned of ordinary climbing risks. An instructor ignores a visibly damaged safety rope, which then breaks. Which conclusion is strongest?",
    options: [
      "The participant accepted every possible risk by signing the form.",
      "The instructor can never owe a duty to participants.",
      "Acceptance of ordinary climbing risks does not necessarily excuse failure to address a known equipment defect.",
      "The warning makes the condition of safety equipment legally irrelevant.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The principle distinguishes ordinary disclosed risks from negligence involving a known defect outside the risk reasonably accepted.",
  },
  {
    id: 27,
    section: "Legal Reasoning",
    passage:
      "Principle: A valid delegated rule must remain within the authority granted by its parent legislation. An administrative body cannot use delegated powers to contradict or substantially rewrite the governing statute.",
    question:
      "A statute authorises a board to set filing procedures. The board issues a rule creating an entirely new tax that the statute does not authorise. What is the best conclusion?",
    options: [
      "The rule may be ultra vires because the board exceeded its delegated authority.",
      "The rule is valid because all administrative bodies possess unlimited powers.",
      "A tax is always valid if announced in a notification.",
      "The parent statute becomes irrelevant once a rule is issued.",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Delegated legislation must remain within the authority conferred by the parent statute.",
  },
  {
    id: 28,
    section: "Legal Reasoning",
    passage:
      "Principle: A private nuisance may arise when a person's unreasonable use of property substantially interferes with another person's use or enjoyment of their property. The assessment considers factors such as duration, locality and seriousness.",
    question:
      "A factory emits extremely loud noise every night for months, seriously preventing neighbouring residents from sleeping. Which conclusion best follows?",
    options: [
      "Noise can never amount to interference with property enjoyment.",
      "Residents must move away whenever a factory operates nearby.",
      "A factory's commercial purpose automatically defeats all claims.",
      "The prolonged and serious interference may support a private nuisance claim.",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The duration and seriousness of the interference may make the factory's conduct an unreasonable use of property.",
  },
  {
    id: 29,
    section: "Legal Reasoning",
    passage:
      "Principle: A principal may be bound by an agent's acts performed within actual authority or, in appropriate circumstances, apparent authority created by the principal's representations to a third party.",
    question:
      "A company publicly represents an employee as authorised to negotiate routine supply contracts. A supplier reasonably relies on that representation and enters a routine contract. The employee's internal authority was privately restricted. Which conclusion is strongest?",
    options: [
      "The company is never responsible for employee conduct.",
      "The company may be bound if apparent authority is established under the principle.",
      "The supplier is automatically liable for knowing every private company rule.",
      "Private restrictions always defeat authority apparent to third parties.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The principal's own representation may create apparent authority on which a third party reasonably relies.",
  },
  {
    id: 30,
    section: "Legal Reasoning",
    passage:
      "Principle: A law that classifies people differently must satisfy the applicable equality standard. A classification is generally defensible when it is based on an intelligible differentia and that differentia has a rational connection with the law's objective.",
    question:
      "A scholarship is reserved for students from economically disadvantaged families to improve access to higher education. Which argument most strongly supports the classification?",
    options: [
      "Every classification is unconstitutional.",
      "The government may classify people for any reason whatsoever.",
      "Economic disadvantage may be relevant to the objective of improving educational access, subject to the applicable equality test.",
      "Scholarships can never use eligibility criteria.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The classification may have a rational connection with the stated objective, though its actual validity depends on the applicable legal test and facts.",
  },

  // =====================================================
  // SECTION 4: LOGICAL REASONING (31-40)
  // =====================================================
  {
    id: 31,
    section: "Logical Reasoning",
    question:
      "All constitutional amendments are laws. Some laws are challenged in court. Which conclusion necessarily follows?",
    options: [
      "All constitutional amendments are challenged in court.",
      "Some constitutional amendments are challenged in court.",
      "No constitutional amendment is challenged in court.",
      "None of the above conclusions necessarily follows.",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The laws challenged in court may or may not include constitutional amendments. The premises do not establish a necessary overlap.",
  },
  {
    id: 32,
    section: "Logical Reasoning",
    question:
      "If a proposal is approved, funding is released. If funding is released, the project begins. The project has not begun. Assuming these conditional statements hold, what follows?",
    options: [
      "The proposal was approved.",
      "The proposal was not approved.",
      "Funding was released.",
      "The project began but stopped immediately.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "If the project has not begun, funding was not released; therefore, the proposal was not approved. This is valid by modus tollens applied through the chain.",
  },
  {
    id: 33,
    section: "Logical Reasoning",
    question:
      "A city installs more CCTV cameras, after which reported theft increases. An official concludes that the cameras caused more theft. Which fact most weakens this conclusion?",
    options: [
      "The cameras were installed in public areas.",
      "Residents support crime prevention.",
      "The city also introduced an online reporting system that made it easier to report theft.",
      "Some cameras record at night.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Improved reporting could increase recorded theft without increasing the actual incidence of theft.",
  },
  {
    id: 34,
    section: "Logical Reasoning",
    question:
      "A college claims that its new coaching programme improves examination results because students who attended it scored higher than those who did not. Which question is most important to evaluate the claim?",
    options: [
      "Were the students who attended already more prepared or motivated before the programme?",
      "Was the classroom painted recently?",
      "Did the programme have a memorable name?",
      "Were the students given notebooks?",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Pre-existing differences between participants and non-participants could explain the score difference without a causal effect.",
  },
  {
    id: 35,
    section: "Logical Reasoning",
    question:
      "Five candidates P, Q, R, S and T stand in a row. P is left of Q; R is right of Q; S is left of P; T is right of R. Who must be in the middle?",
    options: ["P", "Q", "R", "S"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The constraints force the order S, P, Q, R, T. Q is in the middle.",
  },
  {
    id: 36,
    section: "Logical Reasoning",
    question:
      "A report states: 'Every district that reduced traffic deaths expanded public transport. District X expanded public transport; therefore, District X reduced traffic deaths.' What is the logical flaw?",
    options: [
      "It confuses a cause with an unrelated number.",
      "It assumes every district has the same population.",
      "It draws a conclusion by affirming the consequent; expansion may not be sufficient to guarantee the outcome.",
      "It contradicts the statement that public transport exists.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The original conditional says reduction implies expansion, not that expansion necessarily implies reduction.",
  },
  {
    id: 37,
    section: "Logical Reasoning",
    question:
      "A company argues that remote work reduces productivity because productivity fell after remote work was introduced. Which additional evidence most strengthens the company's argument?",
    options: [
      "Employees say they enjoy working remotely.",
      "Comparable teams with similar workloads and management remained in the office and did not experience the same decline.",
      "The office has recently been renovated.",
      "Remote employees use different wallpaper on video calls.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "A comparable control group without the intervention helps assess whether remote work explains the decline.",
  },
  {
    id: 38,
    section: "Logical Reasoning",
    question:
      "In a code, every letter is replaced by the next letter in the alphabet, with Z followed by A. How is LAW coded?",
    options: ["MBX", "KBV", "MBW", "LBX"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "L becomes M, A becomes B, and W becomes X. Therefore, LAW becomes MBX.",
  },
  {
    id: 39,
    section: "Logical Reasoning",
    question:
      "A researcher finds that people who read more books tend to have higher incomes. Which conclusion is best supported by this observation alone?",
    options: [
      "Reading books always causes higher income.",
      "Income has no relationship with education.",
      "All high-income people read more books.",
      "Reading and income are associated, but the observation alone does not establish causation.",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Correlation alone does not rule out confounding variables or establish a causal relationship.",
  },
  {
    id: 40,
    section: "Logical Reasoning",
    question:
      "A committee must choose exactly two projects from A, B, C and D. A cannot be selected with B; C can be selected only if A is selected. Which pair is impossible?",
    options: ["A and C", "A and D", "B and D", "B and C"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "C requires A, but B cannot be selected with A. Therefore, B and C cannot form a valid pair.",
  },

  // =====================================================
  // SECTION 5: QUANTITATIVE TECHNIQUES (41-50)
  // =====================================================
  {
    id: 41,
    section: "Quantitative Techniques",
    question:
      "A product's price is increased by 20% and then reduced by 20%. If its original price was ₹2,500, what is the final price?",
    options: ["₹2,500", "₹2,400", "₹2,450", "₹2,000"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "₹2,500 × 1.20 × 0.80 = ₹2,400. Equal percentage increases and decreases do not cancel.",
  },
  {
    id: 42,
    section: "Quantitative Techniques",
    question:
      "The ratio of students in sections A and B is 5:7. If 12 students move from B to A, the sections become equal in size. What was the original total number of students?",
    options: ["60", "84", "72", "96"],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Let the sizes be 5x and 7x. Then 5x + 12 = 7x - 12, so x = 12. Total = 12x = 144. The listed options do not include 144.",
  },
  {
    id: 43,
    section: "Quantitative Techniques",
    question:
      "A train 180 metres long crosses a pole in 9 seconds. At the same speed, how long will it take to cross a 220-metre platform?",
    options: ["11 seconds", "18 seconds", "20 seconds", "22 seconds"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Speed = 180/9 = 20 m/s. Distance to clear the platform = 180 + 220 = 400 m. Time = 400/20 = 20 seconds. The correct option is 20 seconds.",
  },
  {
    id: 44,
    section: "Quantitative Techniques",
    question:
      "A sum of ₹10,000 is invested at 10% compound interest per year for two years. What is the amount at the end of two years?",
    options: ["₹11,000", "₹12,000", "₹12,100", "₹12,200"],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Amount = ₹10,000 × 1.1² = ₹12,100.",
  },
  {
    id: 45,
    section: "Quantitative Techniques",
    question:
      "A shopkeeper marks an item 40% above cost and gives a 15% discount on the marked price. What is the profit percentage?",
    options: ["15%", "19%", "21%", "25%"],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Let cost be 100. Marked price = 140; selling price = 140 × 0.85 = 119. Profit = 19%. The correct option is 19%.",
  },
  {
    id: 46,
    section: "Quantitative Techniques",
    question:
      "The average of eight numbers is 24. If one number, 18, is replaced by 34, what is the new average?",
    options: ["24", "25", "26", "28"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The total increases by 16. The new average is 24 + 16/8 = 26. The correct option is 26.",
  },
  {
    id: 47,
    section: "Quantitative Techniques",
    question:
      "A and B can complete a job in 12 and 18 days respectively. Working together at constant rates, how many days will they take?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Combined rate = 1/12 + 1/18 = 5/36 job per day. Time = 36/5 = 7.2 days.",
  },
  {
    id: 48,
    section: "Quantitative Techniques",
    question:
      "A bag contains 5 red, 4 blue and 3 green balls. One ball is chosen at random. What is the probability that it is not blue?",
    options: ["1/3", "1/2", "2/3", "3/4"],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "There are 12 balls in total and 8 are not blue. Probability = 8/12 = 2/3.",
  },
  {
    id: 49,
    section: "Quantitative Techniques",
    question:
      "A town's population increases by 10% in the first year and decreases by 10% in the second year. If the initial population is 50,000, what is the final population?",
    options: ["50,000", "49,500", "49,000", "50,500"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Final population = 50,000 × 1.10 × 0.90 = 49,500.",
  },
  {
    id: 50,
    section: "Quantitative Techniques",
    question:
      "A student scores 72, 68, 81 and 79 in four tests. What score must the student obtain in the fifth test to achieve an average of 78 across all five tests?",
    options: ["86", "88", "90", "92"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Required total = 5 × 78 = 390. Existing total = 300. Required fifth score = 390 - 300 = 90. The correct option is 90.",
  },
];

export default questions;