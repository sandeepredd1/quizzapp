
export const examConfig = {
  appName: "UPSC EXAM",
  examName: "UPSC CSE Prelims – Indian Polity Extreme Mock Test",
  description:
    "50 extremely difficult Indian Polity questions covering the complete selected UPSC Prelims syllabus.",
  passingPercentage: 35,
  marksPerCorrect: 1,
  negativeMarks: 0.25,
  marksPerSkipped: 0,
  durationMinutes: 60,
};

export const questions = [
  // 1. HISTORICAL BACKGROUND
  {
    id: 1,
    section: "Historical Background",
    question:
      "Which provision of the Regulating Act of 1773 was primarily intended to establish centralised control over the East India Company's administration in India?",
    options: [
      "Creation of the office of Secretary of State for India",
      "Appointment of the Governor-General of Bengal with an Executive Council",
      "Introduction of separate electorates",
      "Establishment of provincial dyarchy",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Regulating Act of 1773 created the office of Governor-General of Bengal and an Executive Council of four members. It was an early attempt by the British Parliament to regulate the Company's administration.",
  },

  {
    id: 2,
    section: "Historical Background",
    question:
      "Which of the following correctly explains the constitutional significance of the Charter Act of 1833?",
    options: [
      "It introduced provincial autonomy.",
      "It ended the commercial activities of the East India Company and centralised legislative powers.",
      "It introduced separate electorates for Muslims.",
      "It transferred Indian administration directly to the British Crown.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Charter Act of 1833 ended the Company's commercial functions and made the Governor-General of Bengal the Governor-General of India. It centralised legislative authority.",
  },

  {
    id: 3,
    section: "Historical Background",
    question:
      "Under which Act was the office of Secretary of State for India created?",
    options: [
      "Charter Act of 1853",
      "Government of India Act, 1858",
      "Indian Councils Act, 1861",
      "Government of India Act, 1919",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Government of India Act, 1858 transferred administration from the East India Company to the British Crown and created the office of Secretary of State for India.",
  },

  {
    id: 4,
    section: "Historical Background",
    question:
      "The introduction of separate electorates for Muslims in British India is associated with which constitutional reform?",
    options: [
      "Indian Councils Act, 1892",
      "Indian Councils Act, 1909",
      "Government of India Act, 1919",
      "Government of India Act, 1935",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Indian Councils Act, 1909, popularly known as the Morley-Minto Reforms, introduced separate electorates for Muslims.",
  },

  {
    id: 5,
    section: "Historical Background",
    question:
      "Which of the following was NOT a feature of the Government of India Act, 1919?",
    options: [
      "Introduction of dyarchy in provinces",
      "Bicameral legislature at the Centre",
      "Separation of provincial subjects into reserved and transferred categories",
      "Introduction of provincial autonomy",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Provincial autonomy was introduced by the Government of India Act, 1935. The 1919 Act introduced dyarchy in provinces and bicameralism at the Centre.",
  },

  {
    id: 6,
    section: "Historical Background",
    question:
      "Which feature of the Government of India Act, 1935 was adopted in the Indian Constitution?",
    options: [
      "Complete parliamentary sovereignty",
      "Federal scheme and distribution of legislative powers",
      "Separate electorates for all communities",
      "Provincial dyarchy in its original form",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Several constitutional features, including the federal scheme, division of legislative powers, office of Governor and emergency provisions, were influenced by the Government of India Act, 1935.",
  },

  // 2. MAKING OF THE CONSTITUTION
  {
    id: 7,
    section: "Making of the Indian Constitution",
    question:
      "The Constituent Assembly of India was constituted under which plan?",
    options: [
      "Wavell Plan",
      "Cabinet Mission Plan",
      "Mountbatten Plan",
      "Cripps Mission",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Constituent Assembly was constituted under the Cabinet Mission Plan of 1946. Its members were indirectly elected by provincial legislative assemblies.",
  },

  {
    id: 8,
    section: "Making of the Indian Constitution",
    question:
      "Who among the following served as the Constitutional Adviser to the Constituent Assembly?",
    options: [
      "Dr. B. R. Ambedkar",
      "K. M. Munshi",
      "B. N. Rau",
      "Alladi Krishnaswami Ayyar",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "B. N. Rau served as the Constitutional Adviser and prepared an initial draft that assisted the Drafting Committee.",
  },

  {
    id: 9,
    section: "Making of the Indian Constitution",
    question:
      "Which committee of the Constituent Assembly was chaired by Dr. B. R. Ambedkar?",
    options: [
      "Union Powers Committee",
      "Provincial Constitution Committee",
      "Drafting Committee",
      "Advisory Committee on Fundamental Rights",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Drafting Committee was established on 29 August 1947 and was chaired by Dr. B. R. Ambedkar.",
  },

  {
    id: 10,
    section: "Making of the Indian Constitution",
    question:
      "Arrange the following events in chronological order:\n\n1. Adoption of the Constitution\n2. First meeting of the Constituent Assembly\n3. Appointment of the Drafting Committee\n4. Enforcement of the Constitution",
    options: [
      "2 – 3 – 1 – 4",
      "3 – 2 – 1 – 4",
      "2 – 1 – 3 – 4",
      "3 – 1 – 2 – 4",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Constituent Assembly first met on 9 December 1946. The Drafting Committee was appointed on 29 August 1947. The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950.",
  },

  // 3. SALIENT FEATURES
  {
    id: 11,
    section: "Salient Features",
    question:
      "Why is India described as a 'Union of States' rather than a federation of States under Article 1?",
    options: [
      "States possess an independent right to secede.",
      "The Indian federation is the result of an agreement among sovereign States.",
      "The Union is indestructible, while the territorial existence of States can be altered by Parliament.",
      "States have complete sovereignty over their legislative subjects.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "India is an indestructible Union of destructible States. Parliament can alter the areas, boundaries and names of States under Article 3.",
  },

  {
    id: 12,
    section: "Salient Features",
    question:
      "Which of the following best describes the nature of the Indian parliamentary executive?",
    options: [
      "The President exercises all executive powers independently.",
      "The Council of Ministers is collectively responsible to the Lok Sabha.",
      "The Prime Minister is directly elected by the people.",
      "The Council of Ministers is responsible to both Houses equally.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 75(3) provides that the Council of Ministers is collectively responsible to the House of the People.",
  },

  {
    id: 13,
    section: "Salient Features",
    question:
      "A person who is not a member of either House of Parliament is appointed as a Union Minister. What constitutional requirement must be fulfilled?",
    options: [
      "The person must be elected to the Lok Sabha within three months.",
      "The person must become a member of either House within six months.",
      "The person must receive approval from the Supreme Court.",
      "The person must be nominated by the President to the Rajya Sabha.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 75(5) provides that a minister who is not a member of either House for six consecutive months ceases to be a minister.",
  },

  // 4. PREAMBLE
  {
    id: 14,
    section: "Preamble",
    question:
      "In which landmark judgment did the Supreme Court hold that the Preamble is a part of the Constitution?",
    options: [
      "Berubari Union Case",
      "Kesavananda Bharati Case",
      "Golaknath Case",
      "Minerva Mills Case",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "In Kesavananda Bharati v. State of Kerala (1973), the Supreme Court held that the Preamble is a part of the Constitution.",
  },

  {
    id: 15,
    section: "Preamble",
    question:
      "Which of the following words was NOT added to the Preamble by the 42nd Constitutional Amendment?",
    options: [
      "Socialist",
      "Secular",
      "Integrity",
      "Democratic",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 42nd Amendment added Socialist and Secular and changed Unity of the Nation to Unity and Integrity of the Nation. Democratic was already present.",
  },

  {
    id: 16,
    section: "Preamble",
    question:
      "Can the Preamble be used by the Supreme Court to interpret an ambiguous constitutional provision?",
    options: [
      "No, because it has no constitutional significance.",
      "Yes, as an interpretative aid, but it cannot override clear constitutional provisions.",
      "Yes, and it can override any provision of Part III.",
      "Only after approval by Parliament.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Preamble is an important interpretative aid. However, it is neither independently enforceable nor capable of overriding an express constitutional provision.",
  },

  // 5. UNION AND TERRITORY
  {
    id: 17,
    section: "Union and its Territory",
    question:
      "A State Legislature rejects a Bill referred to it under Article 3 for expressing its views. What is the constitutional position?",
    options: [
      "Parliament cannot proceed with the Bill.",
      "The Bill automatically becomes invalid.",
      "Parliament may still proceed because the State's views are not binding.",
      "The Supreme Court must approve the Bill before introduction.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Under Article 3, the President refers the Bill to the concerned State Legislature for its views. Those views are not binding on Parliament.",
  },

  {
    id: 18,
    section: "Union and its Territory",
    question:
      "Which constitutional provision permits Parliament to make consequential amendments to the First and Fourth Schedules while reorganising States?",
    options: [
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 368",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 4 allows laws made under Articles 2 and 3 to amend the First and Fourth Schedules and other supplemental, incidental and consequential provisions. Such laws are not treated as amendments under Article 368.",
  },

  {
    id: 19,
    section: "Union and its Territory",
    question:
      "Which constitutional procedure was considered necessary by the Supreme Court for the cession of Indian territory to a foreign country in the Berubari Union reference?",
    options: [
      "Ordinary legislation under Article 3",
      "Executive order of the President",
      "Constitutional amendment under Article 368",
      "Resolution of the concerned State Legislature",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "In the Berubari Union reference, the Supreme Court held that cession of Indian territory to a foreign country required a constitutional amendment under Article 368.",
  },

  // 6. CITIZENSHIP
  {
    id: 20,
    section: "Citizenship",
    question:
      "Which Article empowers Parliament to regulate the acquisition and termination of citizenship and all other matters relating to citizenship?",
    options: [
      "Article 5",
      "Article 9",
      "Article 10",
      "Article 11",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 11 empowers Parliament to make laws regarding the acquisition and termination of citizenship and all other matters relating to citizenship.",
  },

  {
    id: 21,
    section: "Citizenship",
    question:
      "Which of the following is NOT a statutory mode of acquisition of Indian citizenship under the Citizenship Act, 1955?",
    options: [
      "Birth",
      "Descent",
      "Naturalisation",
      "Election by a State Legislature",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Citizenship Act, 1955 provides for acquisition by birth, descent, registration, naturalisation and incorporation of territory. Election by a State Legislature is not a mode of citizenship acquisition.",
  },

  {
    id: 22,
    section: "Citizenship",
    question:
      "Under the Citizenship (Amendment) Act, 2019, the specified religious communities from which countries are covered by the special statutory pathway are:",
    options: [
      "Afghanistan, Bangladesh and Pakistan",
      "Nepal, Bhutan and Sri Lanka",
      "Myanmar, China and Bangladesh",
      "Pakistan, Nepal and Myanmar",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 2019 amendment covers specified Hindu, Sikh, Buddhist, Jain, Parsi and Christian communities from Afghanistan, Bangladesh and Pakistan, subject to statutory conditions including the relevant entry date.",
  },

  // 7. CONSTITUTIONAL AMENDMENT
  {
    id: 23,
    section: "Constitutional Amendment",
    question:
      "A Constitution Amendment Bill is passed by the Lok Sabha but rejected by the Rajya Sabha. What happens?",
    options: [
      "A joint sitting can be called.",
      "The President may approve the Bill.",
      "The Bill fails because each House must pass it separately.",
      "The Supreme Court decides which House has priority.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Under Article 368, each House must separately pass the amendment Bill by the prescribed special majority. There is no provision for a joint sitting.",
  },

  {
    id: 24,
    section: "Constitutional Amendment",
    question:
      "Which of the following constitutional amendments requires ratification by at least half of the State Legislatures?",
    options: [
      "Changing the salaries of Members of Parliament",
      "Changing the election procedure of the President",
      "Changing the citizenship provisions",
      "Changing the number of Lok Sabha members through ordinary legislation",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Changes relating to the election of the President require ratification by at least half of the State Legislatures under Article 368.",
  },

  {
    id: 25,
    section: "Constitutional Amendment",
    question:
      "Which Constitutional Amendment introduced the Anti-Defection Law?",
    options: [
      "42nd Amendment",
      "44th Amendment",
      "52nd Amendment",
      "61st Amendment",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 52nd Constitutional Amendment Act, 1985 introduced the Tenth Schedule, which contains the Anti-Defection Law.",
  },

  {
    id: 26,
    section: "Constitutional Amendment",
    question:
      "Which Article was inserted by the 101st Constitutional Amendment to provide for the GST Council?",
    options: [
      "Article 246A",
      "Article 269A",
      "Article 279A",
      "Article 280",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 279A provides for the establishment of the GST Council. Article 246A provides special legislative powers relating to GST.",
  },

  // 8. BASIC STRUCTURE
  {
    id: 27,
    section: "Basic Structure",
    question:
      "Which judgment established the doctrine that Parliament cannot alter the basic structure of the Constitution through its amending power?",
    options: [
      "Shankari Prasad",
      "Golaknath",
      "Kesavananda Bharati",
      "Sajjan Singh",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Kesavananda Bharati judgment of 1973 established that Parliament can amend any part of the Constitution but cannot destroy its basic structure.",
  },

  {
    id: 28,
    section: "Basic Structure",
    question:
      "Which of the following is NOT generally recognised as an element of the Basic Structure?",
    options: [
      "Judicial review",
      "Supremacy of the Constitution",
      "Free and fair elections",
      "Unlimited amending power of Parliament",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Parliament's amending power is limited. Unlimited amending power would contradict the Basic Structure doctrine.",
  },

  {
    id: 29,
    section: "Basic Structure",
    question:
      "In which case did the Supreme Court reaffirm the limited amending power of Parliament and the need for harmony between Fundamental Rights and Directive Principles?",
    options: [
      "Minerva Mills v. Union of India",
      "A.K. Gopalan v. State of Madras",
      "Berubari Union Case",
      "Kihoto Hollohan Case",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "In Minerva Mills (1980), the Supreme Court held that limited amending power and harmony between Parts III and IV are essential features of the Basic Structure.",
  },

  // 9. FUNDAMENTAL RIGHTS
  {
    id: 30,
    section: "Fundamental Rights",
    question:
      "A government-controlled corporation violates an individual's Fundamental Right. Which constitutional definition becomes relevant in determining whether that corporation falls within the meaning of 'State'?",
    options: [
      "Article 12",
      "Article 14",
      "Article 19",
      "Article 32",
    ],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 12 defines the term State for the purposes of Part III. Courts examine factors such as governmental control, financial support and the nature of the body's functions.",
  },

  {
    id: 31,
    section: "Fundamental Rights",
    question:
      "The doctrine of severability under Article 13 primarily means that:",
    options: [
      "An entire law must be struck down whenever one provision is unconstitutional.",
      "Only the unconstitutional portion of a law may be invalidated if it can be separated from the valid portion.",
      "Parliament can validate any unconstitutional law without amendment.",
      "Fundamental Rights cannot be restricted under any circumstances.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The doctrine of severability allows courts to preserve valid portions of legislation when the unconstitutional portion can be separated.",
  },

  {
    id: 32,
    section: "Fundamental Rights",
    question:
      "Which of the following Fundamental Rights is available to both citizens and foreign nationals?",
    options: [
      "Article 15",
      "Article 16",
      "Article 19",
      "Article 21",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 21 protects the life and personal liberty of every person, not merely citizens. Articles 15, 16 and 19 are citizen-specific.",
  },

  {
    id: 33,
    section: "Fundamental Rights",
    question:
      "A classification under Article 14 is constitutionally valid when it satisfies which test?",
    options: [
      "Political majority and legislative approval",
      "Intelligible differentia and rational nexus",
      "Equal numerical representation and proportional voting",
      "Presidential approval and judicial certification",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Reasonable classification under Article 14 requires an intelligible differentia distinguishing those grouped together from others, and a rational nexus with the object of the law.",
  },

  {
    id: 34,
    section: "Fundamental Rights",
    question:
      "Which of the following freedoms is NOT expressly mentioned as a separate freedom under Article 19(1)?",
    options: [
      "Freedom of speech and expression",
      "Freedom to assemble peacefully",
      "Freedom of the press",
      "Freedom to form associations or unions",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Freedom of the press is not separately enumerated in Article 19(1). It has been recognised by the Supreme Court as part of freedom of speech and expression under Article 19(1)(a).",
  },

  {
    id: 35,
    section: "Fundamental Rights",
    question:
      "Which of the following protections under Article 20 cannot be suspended even during a National Emergency through an order under Article 359?",
    options: [
      "Protection against ex post facto criminal laws",
      "Protection against double jeopardy",
      "Protection against self-incrimination",
      "All of the above",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 20 is protected from suspension of the right to move courts under Article 359. Article 21 also receives this protection.",
  },

  {
    id: 36,
    section: "Fundamental Rights",
    question:
      "The constitutional right to education for children between six and fourteen years is provided under:",
    options: [
      "Article 19A",
      "Article 21A",
      "Article 29A",
      "Article 45A",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 21A was inserted by the 86th Constitutional Amendment Act, 2002. It provides for free and compulsory education for children aged six to fourteen years.",
  },

  {
    id: 37,
    section: "Fundamental Rights",
    question:
      "A person is illegally detained by a private individual. Which writ may be issued by a constitutional court to secure the person's release?",
    options: [
      "Mandamus",
      "Certiorari",
      "Habeas Corpus",
      "Quo Warranto",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Habeas Corpus protects against unlawful detention and can be issued against private individuals as well as public authorities in appropriate cases.",
  },

  {
    id: 38,
    section: "Fundamental Rights",
    question:
      "Which of the following best distinguishes Article 32 from Article 226?",
    options: [
      "Article 32 is available only to State Governments.",
      "Article 226 can be invoked only for Fundamental Rights.",
      "Article 226 has wider scope because it can be used for Fundamental Rights and other legal purposes.",
      "Article 32 is not part of the Constitution.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 32 is itself a Fundamental Right and is used to enforce Fundamental Rights. Article 226 gives High Courts wider writ jurisdiction for Fundamental Rights and other purposes.",
  },

  {
    id: 39,
    section: "Fundamental Rights",
    question:
      "Which Constitutional Amendment removed the Right to Property from the list of Fundamental Rights?",
    options: [
      "24th Amendment",
      "42nd Amendment",
      "44th Amendment",
      "52nd Amendment",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 44th Amendment removed Articles 19(1)(f) and 31 from Part III and inserted Article 300A, making the right to property a constitutional right rather than a Fundamental Right.",
  },

  {
    id: 40,
    section: "Fundamental Rights",
    question:
      "Which landmark judgment recognised privacy as a constitutionally protected Fundamental Right?",
    options: [
      "A.K. Gopalan v. State of Madras",
      "K.S. Puttaswamy v. Union of India",
      "Shankari Prasad v. Union of India",
      "S. R. Bommai v. Union of India",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The nine-judge bench in K.S. Puttaswamy v. Union of India (2017) unanimously recognised the right to privacy as a Fundamental Right protected by the Constitution.",
  },

  // 10. DIRECTIVE PRINCIPLES
  {
    id: 41,
    section: "Directive Principles of State Policy",
    question:
      "Which Article declares that Directive Principles are not enforceable by any court but are fundamental in the governance of the country?",
    options: [
      "Article 32",
      "Article 36",
      "Article 37",
      "Article 39",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 37 makes Directive Principles non-justiciable while declaring them fundamental in the governance of the country.",
  },

  {
    id: 42,
    section: "Directive Principles of State Policy",
    question:
      "Which Directive Principle specifically provides for equal justice and free legal aid?",
    options: [
      "Article 38",
      "Article 39A",
      "Article 40",
      "Article 44",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 39A directs the State to ensure equal justice and provide free legal aid so that opportunities for securing justice are not denied because of economic or other disabilities.",
  },

  {
    id: 43,
    section: "Directive Principles of State Policy",
    question:
      "The 2024 Supreme Court judgment in Property Owners Association v. State of Maharashtra primarily examined the interpretation of which constitutional provision?",
    options: [
      "Article 39(a)",
      "Article 39(b)",
      "Article 40",
      "Article 44",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The judgment examined Article 39(b), particularly the meaning of material resources of the community and whether privately owned resources can fall within its scope.",
  },

  {
    id: 44,
    section: "Directive Principles of State Policy",
    question:
      "Which of the following Articles directs the State to organise village panchayats?",
    options: [
      "Article 39",
      "Article 40",
      "Article 43",
      "Article 48",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 40 directs the State to organise village panchayats and endow them with powers and authority necessary to function as units of self-government.",
  },

  // 11. FUNDAMENTAL DUTIES
  {
    id: 45,
    section: "Fundamental Duties",
    question:
      "Fundamental Duties were incorporated into the Indian Constitution on the recommendation of which committee?",
    options: [
      "Sarkaria Commission",
      "Swaran Singh Committee",
      "Balwant Rai Mehta Committee",
      "Punchhi Commission",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The Swaran Singh Committee recommended the inclusion of Fundamental Duties. They were introduced through the 42nd Constitutional Amendment Act, 1976.",
  },

  {
    id: 46,
    section: "Fundamental Duties",
    question:
      "Which Constitutional Amendment added the eleventh Fundamental Duty relating to the education of children?",
    options: [
      "42nd Amendment",
      "44th Amendment",
      "73rd Amendment",
      "86th Amendment",
    ],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "The 86th Constitutional Amendment inserted Article 51A(k), making it a duty of parents or guardians to provide opportunities for education to children between six and fourteen years.",
  },

  {
    id: 47,
    section: "Fundamental Duties",
    question:
      "Which of the following is NOT expressly listed as a Fundamental Duty under Article 51A?",
    options: [
      "Developing scientific temper and humanism",
      "Safeguarding public property",
      "Participating in every election",
      "Protecting the natural environment",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 51A expressly includes scientific temper, protection of the environment and safeguarding public property. Voting in every election is not expressly listed as a Fundamental Duty.",
  },

  // 12. INTEGRATED CONSTITUTIONAL ANALYSIS
  {
    id: 48,
    section: "Integrated Constitutional Analysis",
    question:
      "A National Emergency is proclaimed exclusively on the ground of armed rebellion. Which statement correctly describes the operation of Article 358?",
    options: [
      "Article 358 automatically suspends all Fundamental Rights.",
      "Article 358 automatically suspends Article 19.",
      "Article 358 does not operate because the Emergency is not based on war or external aggression.",
      "Article 358 applies only after approval by every State Legislature.",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "After the 44th Amendment, Article 358 applies only when a National Emergency is proclaimed on the grounds of war or external aggression, not armed rebellion.",
  },

  {
    id: 49,
    section: "Integrated Constitutional Analysis",
    question:
      "Which of the following correctly describes the constitutional significance of the S. R. Bommai judgment?",
    options: [
      "It abolished the office of Governor.",
      "It established important limitations and judicial review concerning the use of Article 356.",
      "It introduced the Basic Structure doctrine.",
      "It declared the Preamble non-constitutional.",
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "In S. R. Bommai v. Union of India (1994), the Supreme Court held that a proclamation under Article 356 is subject to judicial review and laid down important principles governing President's Rule.",
  },

  {
    id: 50,
    section: "Integrated Constitutional Analysis",
    question:
      "A State Legislature enacts a law on a Concurrent List subject that conflicts with an earlier Parliamentary law. The State law has received Presidential assent. Under which constitutional provision may the State law prevail within that State, subject to Parliament's power to override it later?",
    options: [
      "Article 246",
      "Article 249",
      "Article 254(2)",
      "Article 368",
    ],
    answer: 2,
    marks: 1,
    negativeMarks: 0.25,
    explanation:
      "Article 254(2) provides that a State law on a Concurrent List matter may prevail within that State if it has received Presidential assent, notwithstanding an earlier Parliamentary law. Parliament can subsequently override it by enacting another law.",
  },
];

export default questions;
