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
  // ==================== ENGLISH LANGUAGE (1–20) ====================
  {
    id: 1,
    section: "English Language",
    question: "Choose the word closest in meaning to 'mitigate'.",
    options: ["Aggravate", "Alleviate", "Provoke", "Conceal"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Mitigate means to make something less severe."
  },
  {
    id: 2,
    section: "English Language",
    question: "Choose the antonym of 'ephemeral'.",
    options: ["Transient", "Fleeting", "Perpetual", "Temporary"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Ephemeral means short-lived; perpetual means lasting indefinitely."
  },
  {
    id: 3,
    section: "English Language",
    question: "Choose the grammatically correct sentence.",
    options: [
      "Neither of the proposals are acceptable.",
      "Neither of the proposals is acceptable.",
      "Neither proposals is acceptable.",
      "Neither proposal are acceptable."
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Neither is treated as singular in this construction."
  },
  {
    id: 4,
    section: "English Language",
    question: "Choose the correctly spelled word.",
    options: ["Acquiescence", "Aquescence", "Acquiscence", "Acquiescense"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Acquiescence means reluctant acceptance without protest."
  },
  {
    id: 5,
    section: "English Language",
    question: "Choose the correct meaning of 'to play devil's advocate'.",
    options: [
      "To defend a criminal",
      "To argue an opposing view for discussion",
      "To reject every argument",
      "To avoid a debate"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The expression means arguing the opposite side to test an argument."
  },
  {
    id: 6,
    section: "English Language",
    question: "Choose the synonym of 'pragmatic'.",
    options: ["Idealistic", "Practical", "Emotional", "Theoretical"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Pragmatic means dealing with matters in a practical way."
  },
  {
    id: 7,
    section: "English Language",
    question: "Choose the antonym of 'benevolent'.",
    options: ["Generous", "Compassionate", "Malevolent", "Charitable"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Benevolent means well-meaning; malevolent means wishing harm."
  },
  {
    id: 8,
    section: "English Language",
    question: "Select the correct passive voice: 'The committee approved the proposal.'",
    options: [
      "The proposal approved the committee.",
      "The proposal was approved by the committee.",
      "The proposal has approve by the committee.",
      "The committee was approved by the proposal."
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The simple past active voice changes to 'was approved' in passive voice."
  },
  {
    id: 9,
    section: "English Language",
    question: "Choose the correct word: The evidence was not sufficient to ___ the allegation.",
    options: ["Substantiate", "Substitute", "Suppress", "Subside"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Substantiate means to support with evidence."
  },
  {
    id: 10,
    section: "English Language",
    question: "What does 'ubiquitous' mean?",
    options: ["Rare", "Present everywhere", "Uncertain", "Temporary"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Ubiquitous means seeming to be present everywhere."
  },
  {
    id: 11,
    section: "English Language",
    question: "Choose the correct sentence.",
    options: [
      "Each of the candidates have submitted the form.",
      "Each of the candidates has submitted the form.",
      "Each candidates has submitted the form.",
      "Each of candidate have submitted the form."
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "'Each' takes a singular verb."
  },
  {
    id: 12,
    section: "English Language",
    question: "Choose the meaning of 'a double-edged sword'.",
    options: [
      "Something that has both advantages and disadvantages",
      "A completely harmless action",
      "A decision with no consequences",
      "An easy solution to every problem"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "The expression describes something that can have both positive and negative effects."
  },
  {
    id: 13,
    section: "English Language",
    question: "Choose the synonym of 'scrutinise'.",
    options: ["Ignore", "Examine closely", "Approve immediately", "Summarise briefly"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "To scrutinise is to examine something carefully."
  },
  {
    id: 14,
    section: "English Language",
    question: "Choose the antonym of 'candid'.",
    options: ["Frank", "Sincere", "Deceitful", "Honest"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Candid means frank and honest; deceitful means dishonest."
  },
  {
    id: 15,
    section: "English Language",
    question: "Complete the sentence: Hardly had the hearing begun ___ the power failed.",
    options: ["Than", "When", "Then", "While"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The standard construction is 'hardly...when'."
  },
  {
    id: 16,
    section: "English Language",
    question: "What does 'incontrovertible' mean?",
    options: ["Impossible to dispute", "Easy to forget", "Open to interpretation", "Incorrect by definition"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Incontrovertible means unable to be denied or disputed."
  },
  {
    id: 17,
    section: "English Language",
    question: "Choose the correct indirect speech: He said, 'I am busy.'",
    options: [
      "He said that I am busy.",
      "He said that he was busy.",
      "He says that he was busy.",
      "He said that he is being busy."
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "In reported speech, 'am' normally changes to 'was' when the reporting verb is in the past."
  },
  {
    id: 18,
    section: "English Language",
    question: "Choose the synonym of 'lucid'.",
    options: ["Confusing", "Clear", "Lengthy", "Ambiguous"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Lucid means clear and easy to understand."
  },
  {
    id: 19,
    section: "English Language",
    question: "Identify the figure of speech: 'Justice is blind.'",
    options: ["Simile", "Personification", "Hyperbole", "Onomatopoeia"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Personification attributes a human quality or characteristic to an abstract concept."
  },
  {
    id: 20,
    section: "English Language",
    question: "Choose the correct word: The new rule may have serious ___ for citizens.",
    options: ["Implications", "Implicates", "Implicating", "Implicated"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Implications means possible effects or consequences."
  },

  // ==================== CURRENT AFFAIRS & GK (21–40) ====================
  {
    id: 21,
    section: "Current Affairs and GK",
    question: "Which part of the Indian Constitution contains the Fundamental Rights?",
    options: ["Part I", "Part II", "Part III", "Part IV"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Fundamental Rights are contained in Part III."
  },
  {
    id: 22,
    section: "Current Affairs and GK",
    question: "Which constitutional article provides for equality before the law?",
    options: ["Article 12", "Article 14", "Article 19", "Article 32"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Article 14 guarantees equality before the law and equal protection of the laws."
  },
  {
    id: 23,
    section: "Current Affairs and GK",
    question: "Who appoints the Chief Justice of India?",
    options: [
      "The Prime Minister independently",
      "The President of India",
      "The Lok Sabha Speaker",
      "The Chief Election Commissioner"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The President formally appoints the Chief Justice of India."
  },
  {
    id: 24,
    section: "Current Affairs and GK",
    question: "Which institution audits the accounts of the Union and State governments in India?",
    options: ["RBI", "CAG", "NITI Aayog", "Finance Commission"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The Comptroller and Auditor General of India audits government accounts."
  },
  {
    id: 25,
    section: "Current Affairs and GK",
    question: "The Directive Principles of State Policy are primarily found in which part of the Constitution?",
    options: ["Part II", "Part III", "Part IV", "Part V"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Directive Principles are contained in Part IV."
  },
  {
    id: 26,
    section: "Current Affairs and GK",
    question: "Which body conducts elections to Parliament and State Legislatures in India?",
    options: ["Union Public Service Commission", "Election Commission of India", "Supreme Court", "Finance Commission"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The Election Commission of India supervises and conducts these elections."
  },
  {
    id: 27,
    section: "Current Affairs and GK",
    question: "Which house of Parliament is a permanent body?",
    options: ["Lok Sabha", "Rajya Sabha", "Both houses dissolve together", "Neither house"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Rajya Sabha is not subject to dissolution; members retire in rotation."
  },
  {
    id: 28,
    section: "Current Affairs and GK",
    question: "Which Article provides the constitutional right to move the Supreme Court for enforcement of Fundamental Rights?",
    options: ["Article 21", "Article 32", "Article 40", "Article 51"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Article 32 provides constitutional remedies for enforcing Fundamental Rights."
  },
  {
    id: 29,
    section: "Current Affairs and GK",
    question: "Where is the headquarters of the World Trade Organization?",
    options: ["Paris", "Geneva", "New York", "Vienna"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The WTO headquarters is in Geneva, Switzerland."
  },
  {
    id: 30,
    section: "Current Affairs and GK",
    question: "Which organisation publishes the Human Development Report?",
    options: ["UNDP", "WTO", "IMF", "Interpol"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "The United Nations Development Programme publishes the Human Development Report."
  },
  {
    id: 31,
    section: "Current Affairs and GK",
    question: "Which is the highest court of appeal in India?",
    options: ["District Court", "High Court", "Supreme Court", "Sessions Court"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The Supreme Court is the highest judicial authority in India."
  },
  {
    id: 32,
    section: "Current Affairs and GK",
    question: "Which constitutional amendment lowered the voting age from 21 to 18 years?",
    options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The 61st Constitutional Amendment Act, 1988 lowered the voting age."
  },
  {
    id: 33,
    section: "Current Affairs and GK",
    question: "Which institution is responsible for monetary policy in India?",
    options: ["SEBI", "RBI", "NABARD", "CAG"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The Reserve Bank of India is responsible for monetary policy."
  },
  {
    id: 34,
    section: "Current Affairs and GK",
    question: "Which schedule of the Indian Constitution lists the recognised languages?",
    options: ["Fifth Schedule", "Seventh Schedule", "Eighth Schedule", "Tenth Schedule"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The Eighth Schedule lists the constitutionally recognised languages."
  },
  {
    id: 35,
    section: "Current Affairs and GK",
    question: "Which constitutional body recommends the distribution of tax revenues between the Union and States?",
    options: ["Finance Commission", "Election Commission", "UPSC", "National Human Rights Commission"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "The Finance Commission makes recommendations on tax devolution."
  },
  {
    id: 36,
    section: "Current Affairs and GK",
    question: "Which Article deals with the abolition of untouchability?",
    options: ["Article 14", "Article 17", "Article 20", "Article 25"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Article 17 abolishes untouchability."
  },
  {
    id: 37,
    section: "Current Affairs and GK",
    question: "Where is the International Court of Justice located?",
    options: ["Geneva", "The Hague", "Brussels", "Rome"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The International Court of Justice is based in The Hague, Netherlands."
  },
  {
    id: 38,
    section: "Current Affairs and GK",
    question: "Which body replaced the Planning Commission of India?",
    options: ["Finance Commission", "NITI Aayog", "National Development Council", "RBI"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "NITI Aayog replaced the Planning Commission in 2015."
  },
  {
    id: 39,
    section: "Current Affairs and GK",
    question: "Which writ is commonly used to challenge unlawful detention?",
    options: ["Mandamus", "Habeas Corpus", "Certiorari", "Quo Warranto"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Habeas Corpus requires a detained person to be brought before a court."
  },
  {
    id: 40,
    section: "Current Affairs and GK",
    question: "Which institution regulates the securities market in India?",
    options: ["SEBI", "RBI", "IRDAI", "NITI Aayog"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "The Securities and Exchange Board of India regulates the securities market."
  },

  // ==================== LEGAL REASONING (41–60) ====================
  {
    id: 41,
    section: "Legal Reasoning",
    question: "Principle: A person is negligent if they fail to take reasonable care and cause foreseeable harm. Fact: A shopkeeper leaves a wet floor unmarked, and a customer slips. Is the shopkeeper potentially negligent?",
    options: [
      "No, because accidents can never create liability",
      "Yes, because reasonable care may have been breached",
      "No, because customers must always expect wet floors",
      "Yes, but only if the customer intended to fall"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Leaving a wet floor unmarked can breach the duty of reasonable care."
  },
  {
    id: 42,
    section: "Legal Reasoning",
    question: "Principle: A contract requires a valid offer and acceptance. Fact: A offers to sell a bicycle to B for ₹5,000. B accepts the exact offer. Which statement is best?",
    options: [
      "There can be an agreement based on offer and acceptance",
      "No agreement can exist unless the offer is written",
      "Acceptance is invalid whenever money is involved",
      "Only the buyer can make an offer"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "A clear offer and matching acceptance can create an agreement, subject to other legal requirements."
  },
  {
    id: 43,
    section: "Legal Reasoning",
    question: "Principle: Consent obtained by a material threat may be invalid. Fact: X threatens to unlawfully harm Y unless Y signs an agreement. Y signs because of the threat. What is the strongest conclusion?",
    options: [
      "Y's consent may not be free",
      "The agreement is automatically valid",
      "Threats are irrelevant to consent",
      "Y must always perform the agreement"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "An unlawful threat can undermine free consent."
  },
  {
    id: 44,
    section: "Legal Reasoning",
    question: "Principle: A person who intentionally damages another's property may be liable. Fact: A deliberately smashes B's phone during an argument. Which conclusion follows?",
    options: [
      "A may be liable for the damage",
      "A cannot be liable during an argument",
      "B is liable because the phone was portable",
      "Intentional damage is always lawful"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Intentional damage to another person's property can attract liability."
  },
  {
    id: 45,
    section: "Legal Reasoning",
    question: "Principle: A person is generally not liable for an act performed in lawful private defence when the force used is necessary and proportionate. Fact: P uses proportionate force to stop an immediate unlawful attack. Which conclusion is strongest?",
    options: [
      "P may rely on private defence",
      "P is always guilty of an offence",
      "Private defence is available only to police officers",
      "P may use unlimited force in every situation"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Lawful private defence may apply where the force is necessary and proportionate."
  },
  {
    id: 46,
    section: "Legal Reasoning",
    question: "Principle: Defamation involves communicating a false statement that harms another person's reputation, subject to applicable defences. Fact: A knowingly publishes a false accusation about B to others. Which is the best answer?",
    options: [
      "A may face a defamation claim",
      "A is protected because the statement was published",
      "Reputation cannot be legally protected",
      "A statement is never defamatory if it is written"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Knowingly communicating a false, reputation-damaging allegation may amount to defamation."
  },
  {
    id: 47,
    section: "Legal Reasoning",
    question: "Principle: A minor's agreement is generally not enforceable as an ordinary contract against the minor. Fact: A 15-year-old enters a routine commercial contract to purchase an expensive motorcycle. Which is strongest?",
    options: [
      "The contract is automatically enforceable against the minor",
      "The agreement may not be enforceable against the minor",
      "Age is irrelevant to contractual capacity",
      "Only verbal contracts are invalid for minors"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "A minor generally lacks contractual capacity to enter an enforceable ordinary contract."
  },
  {
    id: 48,
    section: "Legal Reasoning",
    question: "Principle: Theft generally requires dishonest appropriation of movable property belonging to another. Fact: X secretly takes Y's wallet intending to keep the money. Which element is most clearly present?",
    options: [
      "Dishonest intention",
      "Consent of the owner",
      "Abandonment by the owner",
      "A lawful transfer of ownership"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "X's intention to keep another person's money indicates dishonest intention."
  },
  {
    id: 49,
    section: "Legal Reasoning",
    question: "Principle: A public authority must exercise its legal power for the purpose for which it was granted. Fact: An official uses licensing power to punish a personal rival. Which principle is implicated?",
    options: [
      "Proper exercise of public power",
      "Abuse of power",
      "Freedom of contract",
      "Strict liability for every accident"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Using official power for a personal purpose can amount to abuse of power."
  },
  {
    id: 50,
    section: "Legal Reasoning",
    question: "Principle: A person may be liable for breach of a valid contractual obligation. Fact: A agrees to deliver goods by a specified date but, without a lawful excuse, refuses to deliver them. Which is strongest?",
    options: [
      "There may be a breach of contract",
      "A refusal can never be a breach",
      "Only the buyer can breach a contract",
      "Every contract ends automatically before delivery"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Unjustified failure to perform a contractual obligation may constitute breach."
  },
  {
    id: 51,
    section: "Legal Reasoning",
    question: "Principle: A person is generally responsible for harm caused by a dangerous act when the required elements of liability are established. Fact: A knowingly throws a heavy object from a balcony into a crowded street, injuring a passer-by. Which is strongest?",
    options: [
      "A may be legally responsible for the injury",
      "A is immune because the object was thrown from private property",
      "A cannot be responsible unless the victim knew A",
      "The injury is irrelevant to liability"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Knowingly creating a serious risk that injures someone may create legal liability."
  },
  {
    id: 52,
    section: "Legal Reasoning",
    question: "Principle: A person cannot ordinarily transfer a better title than they possess, subject to recognised exceptions. Fact: A thief sells a stolen watch to C. Which is generally correct?",
    options: [
      "The thief automatically gives perfect title",
      "The thief generally cannot transfer good title",
      "The watch becomes ownerless after sale",
      "C becomes the original owner in every case"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "A thief generally has no title to transfer, subject to specific legal exceptions."
  },
  {
    id: 53,
    section: "Legal Reasoning",
    question: "Principle: A valid consent must be voluntary. Fact: A person signs a document after being physically forced to sign it. Which conclusion is strongest?",
    options: [
      "The person's consent may be invalid",
      "Physical force always creates valid consent",
      "Consent is unnecessary for every agreement",
      "The document is valid solely because it is signed"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Physical coercion can undermine voluntary consent."
  },
  {
    id: 54,
    section: "Legal Reasoning",
    question: "Principle: Equality before the law prohibits arbitrary discrimination by the State. Fact: A public authority denies a benefit to a qualified applicant solely because of personal hostility. Which is strongest?",
    options: [
      "The decision may be arbitrary",
      "Public authorities can always act out of hostility",
      "Equality applies only to private businesses",
      "A qualified applicant has no legal protection"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "A decision based on personal hostility rather than relevant criteria may be arbitrary."
  },
  {
    id: 55,
    section: "Legal Reasoning",
    question: "Principle: A person may be liable for trespass by intentionally entering another's property without lawful justification. Fact: X knowingly enters Y's fenced land after Y has refused permission. Which is strongest?",
    options: [
      "X may be liable for trespass",
      "Fences have no relevance to property boundaries",
      "Trespass requires permanent occupation",
      "X is protected because the land is outdoors"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Intentional unauthorised entry may constitute trespass."
  },
  {
    id: 56,
    section: "Legal Reasoning",
    question: "Principle: A person generally cannot claim a contractual reward without satisfying the stated conditions. Fact: A reward is offered for returning a lost bag. B finds the bag but never returns it. Which is strongest?",
    options: [
      "B automatically earns the reward by finding the bag",
      "B has not satisfied the return condition",
      "The reward must be paid to everyone who sees the bag",
      "The owner can never offer a reward"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The stated condition requires the bag to be returned."
  },
  {
    id: 57,
    section: "Legal Reasoning",
    question: "Principle: A person who intentionally deceives another to obtain property may incur legal liability. Fact: X knowingly lies about owning a car and obtains an advance payment from Y. Which is strongest?",
    options: [
      "X may incur liability for deception",
      "X is protected because Y paid voluntarily",
      "Ownership claims can never be deceptive",
      "An advance payment removes all liability"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Knowingly false claims used to obtain payment may amount to deception."
  },
  {
    id: 58,
    section: "Legal Reasoning",
    question: "Principle: A person must generally comply with a lawful court order unless it is stayed or set aside. Fact: A party knowingly ignores an operative court order. Which is strongest?",
    options: [
      "The party may face consequences for non-compliance",
      "Court orders are optional suggestions",
      "Only the judge who issued the order must follow it",
      "An order stops applying whenever it is inconvenient"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Failure to comply with an operative court order can have legal consequences."
  },
  {
    id: 59,
    section: "Legal Reasoning",
    question: "Principle: A person generally cannot claim ownership of another's property merely by temporarily possessing it with permission. Fact: B borrows A's laptop for one day and later claims it as B's own. Which is strongest?",
    options: [
      "Borrowing automatically transfers ownership",
      "Temporary possession with permission does not by itself transfer ownership",
      "Ownership always belongs to the current possessor",
      "A loses all rights by lending the laptop"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Permission to use property does not itself transfer ownership."
  },
  {
    id: 60,
    section: "Legal Reasoning",
    question: "Principle: A restriction on a fundamental right must be assessed under the applicable constitutional standards. Fact: A government order restricts speech without identifying any lawful basis or relevant justification. Which is strongest?",
    options: [
      "The restriction may be open to constitutional challenge",
      "All restrictions on speech are automatically valid",
      "Government orders cannot be reviewed by courts",
      "A fundamental right can never be enforced"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "A restriction lacking a lawful basis or sufficient justification may be challenged."
  },

  // ==================== LOGICAL REASONING (61–80) ====================
  {
    id: 61,
    section: "Logical Reasoning",
    question: "All advocates are graduates. Some graduates are writers. Which conclusion necessarily follows?",
    options: [
      "All advocates are writers",
      "Some writers are advocates",
      "All advocates are graduates",
      "No graduate is an advocate"
    ],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The first statement directly establishes that all advocates are graduates."
  },
  {
    id: 62,
    section: "Logical Reasoning",
    question: "Find the next number: 3, 8, 15, 24, 35, __.",
    options: ["42", "46", "48", "50"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The differences are 5, 7, 9, 11; the next difference is 13, giving 48."
  },
  {
    id: 63,
    section: "Logical Reasoning",
    question: "If all courts are institutions and some institutions are independent, which statement must be true?",
    options: [
      "All courts are independent",
      "Some courts are independent",
      "All courts are institutions",
      "No institution is a court"
    ],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Only the first statement is guaranteed by the premises."
  },
  {
    id: 64,
    section: "Logical Reasoning",
    question: "Find the odd one out.",
    options: ["Square", "Triangle", "Circle", "Cube"],
    answer: 3, marks: 1, negativeMarks: 0.25,
    explanation: "A cube is three-dimensional; the others are two-dimensional shapes."
  },
  {
    id: 65,
    section: "Logical Reasoning",
    question: "If LAW is coded as MBX by shifting each letter forward by one, how is COURT coded?",
    options: ["DPVSU", "DPTSU", "BNTQS", "DPVST"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "C→D, O→P, U→V, R→S, T→U, producing DPVSU."
  },
  {
    id: 66,
    section: "Logical Reasoning",
    question: "A is taller than B. B is taller than C. D is taller than A. Who is the tallest?",
    options: ["A", "B", "C", "D"],
    answer: 3, marks: 1, negativeMarks: 0.25,
    explanation: "The order is D > A > B > C."
  },
  {
    id: 67,
    section: "Logical Reasoning",
    question: "Statement: All public parks should have accessible paths. Assumption: People with mobility limitations may need accessible paths to use parks. Is the assumption reasonable?",
    options: [
      "Yes, it supports the stated recommendation",
      "No, parks are only for athletes",
      "No, paths are never useful",
      "Yes, because every park must be indoors"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Accessibility is a reasonable basis for recommending accessible paths."
  },
  {
    id: 68,
    section: "Logical Reasoning",
    question: "Find the next letter: A, C, F, J, O, __.",
    options: ["S", "T", "U", "V"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The jumps are +2, +3, +4, +5; the next is +6, giving U."
  },
  {
    id: 69,
    section: "Logical Reasoning",
    question: "If yesterday was Monday, what day will it be three days after tomorrow?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Yesterday Monday means today Tuesday. Tomorrow is Wednesday; three days later is Saturday. Correction: Wednesday + 3 days is Saturday.",
  },
  {
    id: 70,
    section: "Logical Reasoning",
    question: "A statement says, 'The city should expand public transport because traffic congestion is increasing.' Which assumption best supports it?",
    options: [
      "Public transport can help reduce dependence on private vehicles",
      "Every resident owns a car",
      "Traffic congestion is beneficial",
      "Public transport always increases congestion"
    ],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "The argument assumes that improved public transport can reduce private vehicle use."
  },
  {
    id: 71,
    section: "Logical Reasoning",
    question: "Complete the series: 2, 6, 18, 54, __.",
    options: ["108", "126", "162", "216"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Each number is multiplied by 3."
  },
  {
    id: 72,
    section: "Logical Reasoning",
    question: "All judges are legally trained. No legally trained person is uneducated. Which conclusion follows?",
    options: [
      "Some judges are uneducated",
      "No judge is uneducated",
      "All educated people are judges",
      "No judge has legal training"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Judges are legally trained, and legally trained people are not uneducated."
  },
  {
    id: 73,
    section: "Logical Reasoning",
    question: "Ravi walks 5 km north, then 3 km east, then 5 km south. Where is he relative to his starting point?",
    options: ["3 km east", "3 km west", "5 km north", "At the starting point"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "The north and south movements cancel, leaving him 3 km east."
  },
  {
    id: 74,
    section: "Logical Reasoning",
    question: "Which weakens the claim that a new library increased exam scores? Scores rose after the library opened, but the school also introduced extra tutoring.",
    options: [
      "The library has many books",
      "Extra tutoring could also explain the increase in scores",
      "Students can borrow books",
      "The library opens in the morning"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Another plausible cause weakens the claim that the library alone caused the increase."
  },
  {
    id: 75,
    section: "Logical Reasoning",
    question: "If P is greater than Q, Q is greater than R, and R is greater than S, which is the smallest?",
    options: ["P", "Q", "R", "S"],
    answer: 3, marks: 1, negativeMarks: 0.25,
    explanation: "The order is P > Q > R > S."
  },
  {
    id: 76,
    section: "Logical Reasoning",
    question: "Find the next number: 1, 4, 9, 16, 25, __.",
    options: ["30", "32", "36", "49"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "These are squares: 1², 2², 3², 4², 5²; next is 6² = 36."
  },
  {
    id: 77,
    section: "Logical Reasoning",
    question: "If the statement 'Some lawyers are teachers' is true, which must be true?",
    options: [
      "All lawyers are teachers",
      "At least one lawyer is a teacher",
      "No teacher is a lawyer",
      "All teachers are lawyers"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "'Some' means at least one."
  },
  {
    id: 78,
    section: "Logical Reasoning",
    question: "A meeting is scheduled before the hearing. The hearing is scheduled before the judgment. Which event comes first?",
    options: ["Judgment", "Hearing", "Meeting", "Cannot be determined"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The order is meeting, hearing, judgment."
  },
  {
    id: 79,
    section: "Logical Reasoning",
    question: "Which conclusion follows? If it rains, the match is cancelled. The match was not cancelled.",
    options: [
      "It definitely rained",
      "It did not rain, assuming the stated rule was followed",
      "The match was played indoors",
      "The rule must be false"
    ],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "This is modus tollens: if rain implies cancellation and there was no cancellation, rain did not occur under the rule."
  },
  {
    id: 80,
    section: "Logical Reasoning",
    question: "Five people stand in a line. A is before B, B is before C, and D is after C. Which order is required among these four?",
    options: ["D, C, B, A", "A, B, C, D", "B, A, D, C", "C, A, B, D"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "The required relative order is A before B, B before C, and C before D."
  },

  // ==================== QUANTITATIVE TECHNIQUES (81–100) ====================
  {
    id: 81,
    section: "Quantitative Techniques",
    question: "A shop offers a 20% discount on an item priced at ₹2,500. What is the selling price?",
    options: ["₹1,800", "₹2,000", "₹2,100", "₹2,200"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "20% of ₹2,500 is ₹500; selling price = ₹2,000."
  },
  {
    id: 82,
    section: "Quantitative Techniques",
    question: "A sum of ₹8,000 earns simple interest at 5% per annum for 3 years. Find the interest.",
    options: ["₹800", "₹1,000", "₹1,200", "₹1,500"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "SI = P × R × T / 100 = 8000 × 5 × 3 / 100 = ₹1,200."
  },
  {
    id: 83,
    section: "Quantitative Techniques",
    question: "The ratio of boys to girls in a class is 3:2. If there are 40 students, how many are girls?",
    options: ["12", "16", "20", "24"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Girls = 2/5 × 40 = 16."
  },
  {
    id: 84,
    section: "Quantitative Techniques",
    question: "A train travels 180 km in 3 hours. What is its average speed?",
    options: ["45 km/h", "50 km/h", "60 km/h", "75 km/h"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Speed = distance ÷ time = 180 ÷ 3 = 60 km/h."
  },
  {
    id: 85,
    section: "Quantitative Techniques",
    question: "The average of 12, 18, 20, 25 and 25 is:",
    options: ["18", "19", "20", "21"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "The sum is 100; 100 ÷ 5 = 20."
  },
  {
    id: 86,
    section: "Quantitative Techniques",
    question: "If 3x + 7 = 31, find x.",
    options: ["6", "7", "8", "9"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "3x = 24, so x = 8."
  },
  {
    id: 87,
    section: "Quantitative Techniques",
    question: "A product costs ₹600 and is sold for ₹750. What is the profit percentage?",
    options: ["20%", "25%", "30%", "35%"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Profit = ₹150; profit percentage = 150/600 × 100 = 25%."
  },
  {
    id: 88,
    section: "Quantitative Techniques",
    question: "A population of 20,000 increases by 10%. What is the new population?",
    options: ["21,000", "22,000", "22,500", "23,000"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "10% of 20,000 is 2,000; total = 22,000."
  },
  {
    id: 89,
    section: "Quantitative Techniques",
    question: "A can complete a task in 10 days and B in 15 days. How long will they take working together?",
    options: ["5 days", "6 days", "8 days", "12 days"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Combined daily work = 1/10 + 1/15 = 1/6, so they take 6 days."
  },
  {
    id: 90,
    section: "Quantitative Techniques",
    question: "What is 35% of 480?",
    options: ["148", "158", "168", "178"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "0.35 × 480 = 168."
  },
  {
    id: 91,
    section: "Quantitative Techniques",
    question: "A rectangle has length 15 cm and width 8 cm. What is its area?",
    options: ["46 cm²", "92 cm²", "120 cm²", "240 cm²"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Area = length × width = 15 × 8 = 120 cm²."
  },
  {
    id: 92,
    section: "Quantitative Techniques",
    question: "If the selling price is ₹960 after a 20% discount, what was the marked price?",
    options: ["₹1,100", "₹1,150", "₹1,200", "₹1,250"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "₹960 is 80% of the marked price; 960 ÷ 0.8 = ₹1,200."
  },
  {
    id: 93,
    section: "Quantitative Techniques",
    question: "A car covers 240 km at 60 km/h. How long does the journey take?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Time = distance ÷ speed = 240 ÷ 60 = 4 hours."
  },
  {
    id: 94,
    section: "Quantitative Techniques",
    question: "The ratio of two numbers is 4:7 and their sum is 99. Find the smaller number.",
    options: ["27", "32", "36", "42"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Total parts = 11; one part = 99 ÷ 11 = 9; smaller number = 4 × 9 = 36."
  },
  {
    id: 95,
    section: "Quantitative Techniques",
    question: "A number is increased by 25% and becomes 500. What was the original number?",
    options: ["375", "400", "425", "450"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Original × 1.25 = 500, so original = 400."
  },
  {
    id: 96,
    section: "Quantitative Techniques",
    question: "Find the compound interest on ₹1,000 at 10% per annum for 2 years, compounded annually.",
    options: ["₹200", "₹210", "₹220", "₹250"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "Amount = 1000 × 1.1² = ₹1,210; compound interest = ₹210."
  },
  {
    id: 97,
    section: "Quantitative Techniques",
    question: "A bag contains 4 red balls and 6 blue balls. What is the probability of randomly drawing a red ball?",
    options: ["2/5", "3/5", "1/2", "2/3"],
    answer: 0, marks: 1, negativeMarks: 0.25,
    explanation: "Probability = 4/(4 + 6) = 4/10 = 2/5."
  },
  {
    id: 98,
    section: "Quantitative Techniques",
    question: "A student scores 72 out of 90. What is the percentage?",
    options: ["75%", "80%", "85%", "90%"],
    answer: 1, marks: 1, negativeMarks: 0.25,
    explanation: "72 ÷ 90 × 100 = 80%."
  },
  {
    id: 99,
    section: "Quantitative Techniques",
    question: "The price of an item rises from ₹400 to ₹460. What is the percentage increase?",
    options: ["10%", "12%", "15%", "20%"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "Increase = ₹60; 60 ÷ 400 × 100 = 15%."
  },
  {
    id: 100,
    section: "Quantitative Techniques",
    question: "A sum is divided between A and B in the ratio 5:3. If the total is ₹6,400, how much does A receive?",
    options: ["₹2,400", "₹3,200", "₹4,000", "₹4,800"],
    answer: 2, marks: 1, negativeMarks: 0.25,
    explanation: "A receives 5/8 of ₹6,400 = ₹4,000."
  }
];

export default questions;

