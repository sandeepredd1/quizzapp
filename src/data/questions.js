export const examConfig = {
  appName: "UPSC EXAM",
  examName: "UPSC CSE Prelims – Advanced Geography Mock Test",
  description: "50 extremely challenging, analytical Geography questions in UPSC Prelims style.",
  passingPercentage: 35,
  marksPerCorrect: 1,
  negativeMarks: 0.25,
  marksPerSkipped: 0,
  durationMinutes: 60,
};

export const questions = [
  {
    id: 1,
    section: "Physical Geography",
    question: "Consider the following statements about the geostrophic wind: 1. It results from a balance between the pressure-gradient force and Coriolis force. 2. It is parallel to isobars on a frictionless horizontal surface. 3. It can exist at the Equator under the same approximation. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Geostrophic balance requires a non-zero Coriolis parameter; the approximation breaks down at the Equator."
  },
  {
    id: 2,
    section: "Physical Geography",
    question: "A parcel of unsaturated air rises dry adiabatically until saturation and then continues to rise. Which statement best describes its subsequent cooling?",
    options: ["It cools at the same rate because latent heat is absent", "It cools at a lower rate because condensation releases latent heat", "It warms because pressure decreases", "Its temperature remains constant"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Latent heat released during condensation offsets part of the adiabatic cooling, giving a lower saturated adiabatic lapse rate."
  },
  {
    id: 3,
    section: "Physical Geography",
    question: "Consider the following statements about the thermal structure of the atmosphere: 1. The tropopause is generally higher over the Equator than over the poles. 2. The stratosphere warms with height largely due to ozone absorption of ultraviolet radiation. 3. The mesopause is typically the warmest atmospheric boundary. Which are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The mesopause is generally the coldest atmospheric boundary; the thermosphere reaches much higher temperatures."
  },
  {
    id: 4,
    section: "Physical Geography",
    question: "Which combination most strongly favours the development of a strong temperature inversion in a valley?",
    options: ["Cloudy sky, strong winds and a steep valley slope", "Clear sky, long night, weak winds and cold-air drainage", "High daytime insolation and turbulent mixing", "Persistent convective rainfall"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Radiational cooling and downslope drainage allow dense cold air to pool on valley floors under calm, clear conditions."
  },
  {
    id: 5,
    section: "Physical Geography",
    question: "With reference to planetary waves (Rossby waves), consider: 1. They arise partly due to the variation of the Coriolis parameter with latitude. 2. Their phase propagation is generally westward relative to the mean flow. 3. They influence the development and persistence of large-scale weather patterns. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Rossby waves are large-scale planetary waves linked to the beta effect and are central to mid-latitude circulation and weather regimes."
  },
  {
    id: 6,
    section: "Climatology",
    question: "Consider the following statements regarding the Indian monsoon trough: 1. Its position influences the spatial distribution of monsoon rainfall. 2. A shift towards the Himalayan foothills is associated with break-monsoon conditions over much of central India. 3. It is a permanent feature fixed at the same latitude throughout the year. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The monsoon trough shifts seasonally; its northward displacement is associated with break conditions in many central Indian areas."
  },
  {
    id: 7,
    section: "Climatology",
    question: "Which of the following can contribute to the formation of a tropical cyclone? 1. Sufficient Coriolis force away from the Equator. 2. High sea-surface temperature and ocean heat content. 3. Low vertical wind shear. 4. A pre-existing low-level disturbance. Select the correct answer.",
    options: ["1, 2 and 3 only", "1, 2 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All are favourable ingredients; strong vertical wind shear generally disrupts cyclone organisation."
  },
  {
    id: 8,
    section: "Climatology",
    question: "With reference to Madden–Julian Oscillation (MJO): 1. It is an eastward-propagating pulse of enhanced and suppressed tropical convection. 2. It can modulate the active and break phases of the Indian summer monsoon. 3. It is confined to the North Atlantic basin. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "MJO is an intraseasonal tropical phenomenon, often propagating eastward from the Indian Ocean across the Maritime Continent into the Pacific."
  },
  {
    id: 9,
    section: "Climatology",
    question: "A positive Indian Ocean Dipole (IOD) is generally characterised by:",
    options: ["Warmer western Indian Ocean and cooler eastern equatorial Indian Ocean", "Warmer eastern Indian Ocean and cooler western Indian Ocean", "Uniform warming of the entire Indian Ocean", "Cooling of both western and eastern equatorial Indian Ocean"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "A positive IOD features a positive west-minus-east sea-surface-temperature gradient and can sometimes support Indian monsoon rainfall."
  },
  {
    id: 10,
    section: "Climatology",
    question: "Consider these statements about the subtropical jet stream: 1. It is associated with strong horizontal temperature gradients. 2. Its seasonal shift is related to the migration of major pressure and thermal systems. 3. The wintertime subtropical westerly jet influences weather over northern India. Which are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All are correct. The subtropical westerly jet is important for winter circulation and western disturbances affecting northern India."
  },
  {
    id: 11,
    section: "Geomorphology",
    question: "A river terrace sequence occurs at progressively higher levels above the present floodplain. Which interpretation is most defensible?",
    options: ["It necessarily proves continuous regional uplift", "It may record alternating phases of incision and floodplain aggradation driven by tectonic, climatic or base-level changes", "It can form only through glacial deposition", "It indicates that the river has ceased lateral erosion permanently"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Terraces are abandoned valley-floor surfaces; their origin may involve interacting tectonic, climatic and base-level controls."
  },
  {
    id: 12,
    section: "Geomorphology",
    question: "Consider the following statements about drainage patterns: 1. Trellis drainage commonly develops where resistant and weak strata alternate. 2. Radial drainage develops around domes or volcanic cones. 3. Annular drainage is associated with concentric outcrops around structural domes or basins. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All three drainage patterns are associated with characteristic geological structures and relief."
  },
  {
    id: 13,
    section: "Geomorphology",
    question: "Which combination is most diagnostic of a mature karst landscape?",
    options: ["Dendritic surface streams, levees and oxbow lakes", "Dolines, disappearing streams, caves and underground drainage", "Drumlins, eskers and terminal moraines", "Yardangs, deflation hollows and barchans"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Solutional limestone landscapes commonly contain dolines, caves, sinking streams and subterranean drainage networks."
  },
  {
    id: 14,
    section: "Geomorphology",
    question: "With reference to mass movement, consider: 1. Solifluction involves slow downslope movement of water-saturated soil, often in periglacial environments. 2. Rockfall is typically a rapid movement from steep slopes. 3. Slump commonly involves rotational movement along a curved failure surface. Which are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All three descriptions are correct and distinguish different mass-wasting processes."
  },
  {
    id: 15,
    section: "Geomorphology",
    question: "The concept of dynamic equilibrium in fluvial geomorphology implies that:",
    options: ["A river channel never changes its form", "Channel form reflects adjustment among discharge, sediment load, sediment calibre, slope and boundary conditions", "Only tectonic uplift determines channel geometry", "A river always reaches a final, permanently stable profile"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Dynamic equilibrium describes ongoing adjustment rather than an unchanging channel or a single final state."
  },
  {
    id: 16,
    section: "Oceanography",
    question: "Consider the following statements about the Antarctic Circumpolar Current (ACC): 1. It flows from west to east around Antarctica. 2. It connects the major ocean basins. 3. Its flow is uninterrupted by continental landmasses at comparable southern latitudes. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The ACC is the only major current that circles the globe without being blocked by a continent."
  },
  {
    id: 17,
    section: "Oceanography",
    question: "Which of the following conditions can strengthen deep-water formation in high-latitude oceans? 1. Surface cooling. 2. Brine rejection during sea-ice formation. 3. Freshwater input that lowers surface salinity. Select the correct answer.",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Cooling and brine rejection increase seawater density; freshwater input generally lowers density and can inhibit sinking."
  },
  {
    id: 18,
    section: "Oceanography",
    question: "With reference to oceanic oxygen minimum zones (OMZs): 1. They may occur where biological oxygen consumption is high. 2. Weak ventilation can favour their persistence. 3. They are necessarily located at the ocean surface. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "OMZs commonly occur at intermediate depths where respiration consumes oxygen and ventilation is limited."
  },
  {
    id: 19,
    section: "Oceanography",
    question: "Which of the following conditions can strengthen coastal upwelling?",
    options: ["Alongshore winds driving surface water offshore through Ekman transport", "Warm surface water sinking along the coast", "Freshwater discharge stopping all vertical movement", "A complete absence of wind stress"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Offshore Ekman transport allows colder, nutrient-rich subsurface water to rise."
  },
  {
    id: 20,
    section: "Oceanography",
    question: "Consider the following statements about ocean salinity: 1. High evaporation relative to precipitation tends to increase surface salinity. 2. Large river discharge generally lowers coastal surface salinity. 3. Sea-ice formation can increase salinity of nearby seawater through brine rejection. Which are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All three processes affect salinity: evaporation concentrates salts, freshwater dilutes them, and brine rejection raises surrounding seawater salinity."
  },
  {
    id: 21,
    section: "Indian Geography",
    question: "Consider the following statements about the western disturbances: 1. They are eastward-moving extra-tropical weather systems embedded in the westerlies. 2. They bring winter precipitation to northwestern India. 3. Their moisture can originate partly from the Mediterranean and adjoining regions. Which are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Western disturbances are extra-tropical systems moving with the westerlies and are important for winter rain and Himalayan snowfall."
  },
  {
    id: 22,
    section: "Indian Geography",
    question: "Which of the following pairs are correctly matched? 1. Duns—longitudinal valleys between Lesser Himalaya and Shiwalik. 2. Karewas—lacustrine deposits of Kashmir. 3. Doabs—land between two rivers. 4. Pats—lateritic plateaus of the western coastal region. Select the correct answer.",
    options: ["1, 2 and 3 only", "1 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Duns, Karewas and doabs are correctly matched. Pats are flat-topped, laterite-capped uplands associated with the Chota Nagpur region, including the Netarhat area, rather than a general feature of the western coastal region."
  },
  {
    id: 23,
    section: "Indian Geography",
    question: "The unusually high rainfall at Mawsynram and Cherrapunji is best explained by the combined effect of:",
    options: ["Only their proximity to the Equator", "Moisture-laden Bay of Bengal branch, funnel-shaped topography and forced ascent against the Khasi Hills", "Western disturbances and polar easterlies", "The rain-shadow effect of the Aravallis"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Bay of Bengal branch is channelled towards the Khasi Hills, where strong orographic uplift produces exceptional rainfall."
  },
  {
    id: 24,
    section: "Indian Geography",
    question: "Consider the following statements about the Deccan Trap: 1. It is largely composed of basaltic lava flows. 2. Its step-like topography reflects successive lava-flow layers and differential erosion. 3. It formed primarily through explosive rhyolitic volcanism. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Deccan Traps are predominantly flood basalts from fissure eruptions, not primarily explosive rhyolitic deposits."
  },
  {
    id: 25,
    section: "Indian Geography",
    question: "Which statement best distinguishes the Narmada and Tapi drainage systems from most major east-flowing Peninsular rivers?",
    options: ["They flow across the oldest alluvial plains", "They occupy west-trending structural troughs and generally enter the Arabian Sea through estuaries", "They originate in the Himalaya and are antecedent rivers", "They form the largest deltas of the east coast"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Narmada and Tapi occupy structural troughs and flow westward to the Arabian Sea."
  },
  {
    id: 26,
    section: "Indian Geography",
    question: "Consider the following statements about Indian soils: 1. Laterite formation is favoured by intense leaching under alternating wet and dry tropical conditions. 2. Alluvial soils may vary considerably in texture and age. 3. Black soils generally have high water-retention capacity due to clay content. Which are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All are correct. Lateritisation involves leaching, alluvium is heterogeneous, and clay-rich black soils retain substantial moisture."
  },
  {
    id: 27,
    section: "Indian Geography",
    question: "Which of the following are correctly associated with the Himalayan drainage evolution? 1. Antecedent drainage can preserve an older river course during uplift. 2. River capture may occur through headward erosion. 3. Superimposed drainage develops when a river established on overlying strata cuts down into underlying structures. Select the correct answer.",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All three are recognised drainage concepts describing different relationships between river courses and geological structure."
  },
  {
    id: 28,
    section: "Indian Geography",
    question: "With reference to the Indian monsoon, consider: 1. The Somali jet is a low-level cross-equatorial flow that strengthens during the summer monsoon. 2. The Findlater Jet is a strong southwesterly monsoon wind jet over the western Arabian Sea. 3. The jet is unrelated to the pressure gradient between the Mascarene High and the continental low. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Somali/Findlater jet is linked to the pressure gradient between the Mascarene High and the continental thermal low."
  },
  {
    id: 29,
    section: "Indian Geography",
    question: "Which one of the following best explains why the Coromandel Coast receives a substantial share of its annual rainfall during the retreating monsoon?",
    options: ["The southwest monsoon winds reverse and become moisture-free", "Northeast monsoon flow can pick up moisture over the Bay of Bengal, while cyclonic systems contribute rainfall", "The Western Ghats force all Arabian Sea moisture eastward", "The ITCZ remains permanently south of Sri Lanka"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The northeast monsoon and Bay of Bengal depressions/cyclones bring significant rainfall to Tamil Nadu and the Coromandel Coast."
  },
  {
    id: 30,
    section: "Indian Geography",
    question: "Consider the following pairs: 1. Loktak—phumdis. 2. Chilika—brackish coastal lagoon. 3. Sambhar—inland saline lake. 4. Vembanad—backwater system. How many are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All four are correctly matched with their defining features."
  },
  {
    id: 31,
    section: "World Geography",
    question: "Which of the following are characteristic of a Mediterranean-type climate? 1. Subtropical anticyclones dominate in summer. 2. Westerlies bring much of the winter rainfall. 3. Sclerophyll vegetation is a common adaptation. 4. Rainfall is uniformly distributed throughout the year. Select the correct answer.",
    options: ["1, 2 and 3 only", "1 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Mediterranean climates have dry summers and wetter winters; sclerophyll vegetation is adapted to summer drought."
  },
  {
    id: 32,
    section: "World Geography",
    question: "Consider the following statements about the Andes: 1. The Peru–Chile Trench is associated with subduction of the Nazca Plate beneath South America. 2. The Altiplano is a high plateau associated with Andean mountain building. 3. The Andes are primarily a product of continent-continent collision similar to the Himalaya. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Andes are mainly associated with oceanic-continental subduction, unlike the continent-continent collision responsible for the Himalaya."
  },
  {
    id: 33,
    section: "World Geography",
    question: "Which set of processes best explains the formation of the East African Rift System?",
    options: ["Convergent subduction and crustal shortening", "Continental extension, normal faulting and associated volcanism", "Transform motion alone with no vertical displacement", "Oceanic crustal accretion beneath a mature ocean basin"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The East African Rift is an active continental rift involving extension, normal faults, subsidence and volcanism."
  },
  {
    id: 34,
    section: "World Geography",
    question: "With reference to the Sahel, consider: 1. It is a semi-arid transition zone south of the Sahara. 2. Its rainfall is strongly influenced by the seasonal movement of the ITCZ. 3. It receives most of its annual rainfall during the boreal winter. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Sahel lies south of the Sahara and its short wet season is linked to the northward migration of the ITCZ during boreal summer."
  },
  {
    id: 35,
    section: "World Geography",
    question: "Which of the following statements about the Arctic and Antarctic is correct?",
    options: ["Both have the same land-ocean configuration", "The Arctic is predominantly an ocean surrounded by land, whereas Antarctica is a continent surrounded by ocean", "Antarctica is an ocean surrounded by continents", "The Arctic has a higher mean elevation than Antarctica"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The contrasting land-ocean configuration strongly affects their climate, sea ice and circulation."
  },
  {
    id: 36,
    section: "World Geography",
    question: "Consider the following pairs: 1. Okavango—endorheic inland delta. 2. Danakil Depression—East African Rift region. 3. Lake Baikal—continental rift lake. 4. Dead Sea—below sea level and endorheic. How many are correctly matched?",
    options: ["Only one", "Only two", "Only three", "All four"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All four are correctly matched."
  },
  {
    id: 37,
    section: "World Geography",
    question: "Which of the following best explains the occurrence of fog along the coast of Namibia?",
    options: ["Warm Agulhas Current and intense convection", "Cold Benguela Current cooling moist air, often producing advection fog under stable conditions", "Monsoon reversal from the Indian Ocean", "Strong equatorial uplift throughout the year"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The cold Benguela Current cools moist air near the surface and favours persistent coastal advection fog."
  },
  {
    id: 38,
    section: "World Geography",
    question: "With reference to the Pacific Ring of Fire: 1. It broadly follows zones of active plate boundaries around the Pacific. 2. It includes many subduction-related volcanic arcs. 3. It is characterised by uniformly divergent plate boundaries. Which are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Ring of Fire is dominated by convergent margins and subduction-related volcanism, with some transform boundaries."
  },
  {
    id: 39,
    section: "World Geography",
    question: "Which combination most directly explains the existence of the Great Rift Valley lakes with varied salinity and depth?",
    options: ["Uniform rainfall and identical basin outlets", "Tectonic subsidence, volcanic barriers, variable evaporation and differing drainage connections", "Only glacial erosion", "River deposition across a stable coastal plain"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Rift tectonics create basins; climate, evaporation, volcanic barriers and outlet conditions determine individual lake characteristics."
  },
  {
    id: 40,
    section: "Mapping",
    question: "A ship travelling from the Red Sea to the Gulf of Aden must pass through which strait, and which landmass lies to its northeast?",
    options: ["Strait of Hormuz; Oman", "Bab-el-Mandeb; Arabian Peninsula", "Dardanelles; Anatolia", "Malacca Strait; Sumatra"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Bab-el-Mandeb connects the Red Sea with the Gulf of Aden; the Arabian Peninsula lies to its northeast and the Horn of Africa to its southwest."
  },
  {
    id: 41,
    section: "Mapping",
    question: "Which sequence correctly follows a west-to-east passage through the Mediterranean outlet into the Black Sea?",
    options: ["Dardanelles → Sea of Marmara → Bosporus", "Bosporus → Dardanelles → Sea of Marmara", "Gibraltar → Bosporus → Dardanelles", "Suez Canal → Sea of Marmara → Bosporus"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Dardanelles connects the Aegean with the Sea of Marmara; the Bosporus connects Marmara with the Black Sea."
  },
  {
    id: 42,
    section: "Mapping",
    question: "Which of the following rivers drain into the Gulf of Mexico? 1. Mississippi 2. Rio Grande 3. Alabama 4. Orinoco",
    options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Mississippi, Rio Grande and Alabama drain into the Gulf of Mexico. Orinoco drains into the Atlantic."
  },
  {
    id: 43,
    section: "Mapping",
    question: "Which is the correct north-to-south sequence of the following African features: Mediterranean Sea, Gulf of Guinea and Cape of Good Hope?",
    options: [
      "Gulf of Guinea → Mediterranean Sea → Cape of Good Hope",
      "Mediterranean Sea → Gulf of Guinea → Cape of Good Hope",
      "Cape of Good Hope → Gulf of Guinea → Mediterranean Sea",
      "Mediterranean Sea → Cape of Good Hope → Gulf of Guinea"
    ],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Mediterranean Sea lies in northern Africa, the Gulf of Guinea on the west-central coast, and the Cape of Good Hope at the southern tip."
  },
  {
    id: 44,
    section: "Mapping",
    question: "Which of the following countries are crossed by the Tropic of Capricorn? 1. Chile 2. Brazil 3. Namibia 4. Madagascar 5. Australia",
    options: ["1, 2 and 5 only", "1, 2, 3 and 5 only", "2, 3, 4 and 5 only", "1, 2, 3, 4 and 5"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "The Tropic of Capricorn crosses Chile, Argentina, Paraguay, Brazil, Namibia, Botswana, South Africa, Mozambique, Madagascar and Australia."
  },
  {
    id: 45,
    section: "Mapping",
    question: "Which of the following pairs are correctly matched? 1. Gulf of Aqaba—Red Sea. 2. Gulf of Bothnia—Baltic Sea. 3. Sea of Okhotsk—northwestern Pacific. 4. Gulf of California—Pacific Ocean.",
    options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
    answer: 3,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "All four water bodies are correctly located."
  },
  {
    id: 46,
    section: "Applied Geography",
    question: "A coastal station records persistent low cloud, fog, little rainfall and nutrient-rich offshore waters. Which oceanographic-atmospheric combination is most likely?",
    options: ["Warm western-boundary current with strong convection", "Cold eastern-boundary current, subsidence inversion and coastal upwelling", "Equatorial countercurrent and deep convection", "Warm poleward current and frequent tropical cyclones"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Cold eastern-boundary currents, stable marine layers and upwelling commonly produce foggy, dry coastal deserts with productive waters."
  },
  {
    id: 47,
    section: "Applied Geography",
    question: "A river basin experiences increased sediment yield after deforestation, while peak discharge becomes sharper and lag time decreases. Which mechanism best explains the combined response?",
    options: ["Increased infiltration and greater soil cohesion", "Reduced interception and infiltration, enhanced overland flow and soil erosion", "Reduced surface runoff due to increased evapotranspiration", "Higher baseflow caused by deeper groundwater recharge"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Vegetation removal reduces interception and often infiltration, increasing rapid runoff and erosion."
  },
  {
    id: 48,
    section: "Applied Geography",
    question: "Assertion (A): A rise in the snowline altitude over several decades may indicate regional warming. Reason (R): Higher temperatures can increase melt and shift the balance between accumulation and ablation. Choose the correct answer.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    answer: 0,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "A rising snowline can reflect increased ablation relative to accumulation, although precipitation and topographic factors also matter."
  },
  {
    id: 49,
    section: "Applied Geography",
    question: "A region shows high annual rainfall but recurrent agricultural drought. Which explanation is most plausible?",
    options: ["Annual rainfall totals alone guarantee adequate soil moisture", "Rainfall is concentrated in a few intense events, with long intra-seasonal dry spells, runoff and limited storage", "High rainfall eliminates evapotranspiration", "Drought can occur only in regions with less than 250 mm annual rainfall"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Agricultural drought depends on timing, intensity, soil storage and evaporative demand, not merely annual rainfall totals."
  },
  {
    id: 50,
    section: "Applied Geography",
    question: "Which combination would most likely produce a strong urban heat island at night?",
    options: ["High vegetation cover, low building density and high albedo", "Dense built surfaces with high heat storage, low vegetation and restricted sky-view factors", "Rural surroundings with high soil moisture and open skies only", "High daytime cloud cover and persistent strong winds"],
    answer: 1,
    marks: 1,
    negativeMarks: 0.25,
    explanation: "Urban materials store daytime heat and release it at night; low vegetation and restricted radiative cooling intensify the effect."
  },
];

export default questions;