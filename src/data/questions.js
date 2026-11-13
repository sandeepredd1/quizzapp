
export const examConfig = {
  appName: "KIDS LEARNING",
  examName: "LKG & UKG Fun Learning Quiz",
  description: "50 fun and easy questions for LKG and UKG children.",
  passingPercentage: 35,
  marksPerCorrect: 1,
  negativeMarks: 0,
  marksPerSkipped: 0,
  durationMinutes: 30,
};

export const questions = [
  // ALPHABETS
  {
    id: 1,
    section: "Alphabets",
    question: "Which letter comes after A?",
    options: ["B", "C", "D", "E"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "B comes after A."
  },
  {
    id: 2,
    section: "Alphabets",
    question: "Which letter comes before D?",
    options: ["A", "B", "C", "E"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "C comes before D."
  },
  {
    id: 3,
    section: "Alphabets",
    question: "How many letters are there in the English alphabet?",
    options: ["20", "24", "26", "28"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "There are 26 letters in the English alphabet."
  },
  {
    id: 4,
    section: "Alphabets",
    question: "Which is a vowel?",
    options: ["B", "C", "A", "D"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "A is a vowel."
  },
  {
    id: 5,
    section: "Alphabets",
    question: "Which letter comes after M?",
    options: ["L", "N", "O", "P"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "N comes after M."
  },

  // NUMBERS
  {
    id: 6,
    section: "Numbers",
    question: "What comes after 5?",
    options: ["4", "6", "7", "8"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "6 comes after 5."
  },
  {
    id: 7,
    section: "Numbers",
    question: "How many fingers are there on one hand?",
    options: ["3", "4", "5", "6"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "One hand has five fingers."
  },
  {
    id: 8,
    section: "Numbers",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "2 + 2 = 4."
  },
  {
    id: 9,
    section: "Numbers",
    question: "Which number is the biggest?",
    options: ["2", "5", "8", "3"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "8 is the biggest number."
  },
  {
    id: 10,
    section: "Numbers",
    question: "What comes before 10?",
    options: ["7", "8", "9", "11"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "9 comes before 10."
  },

  // COLORS
  {
    id: 11,
    section: "Colors",
    question: "What is the color of an apple?",
    options: ["Red", "Blue", "Black", "Purple"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "A common apple color is red."
  },
  {
    id: 12,
    section: "Colors",
    question: "What is the color of the sky on a clear day?",
    options: ["Green", "Blue", "Pink", "Brown"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "The clear daytime sky appears blue."
  },
  {
    id: 13,
    section: "Colors",
    question: "Which color do we get by mixing red and yellow?",
    options: ["Green", "Orange", "Blue", "Black"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Red and yellow make orange."
  },
  {
    id: 14,
    section: "Colors",
    question: "What is the color of grass?",
    options: ["Blue", "Green", "Red", "White"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Grass is usually green."
  },
  {
    id: 15,
    section: "Colors",
    question: "Which color is a banana?",
    options: ["Yellow", "Black", "Blue", "Pink"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "A ripe banana is yellow."
  },

  // ANIMALS
  {
    id: 16,
    section: "Animals",
    question: "Which animal is called the king of the jungle?",
    options: ["Elephant", "Lion", "Rabbit", "Cow"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "The lion is known as the king of the jungle."
  },
  {
    id: 17,
    section: "Animals",
    question: "Which animal gives us milk?",
    options: ["Cow", "Tiger", "Lion", "Fox"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "Cows give us milk."
  },
  {
    id: 18,
    section: "Animals",
    question: "Which animal has a long trunk?",
    options: ["Dog", "Cat", "Elephant", "Horse"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "An elephant has a long trunk."
  },
  {
    id: 19,
    section: "Animals",
    question: "Which animal says 'Meow'?",
    options: ["Dog", "Cat", "Cow", "Goat"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "A cat says meow."
  },
  {
    id: 20,
    section: "Animals",
    question: "Which animal lives in water?",
    options: ["Fish", "Dog", "Camel", "Horse"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "Fish live in water."
  },

  // BIRDS
  {
    id: 21,
    section: "Birds",
    question: "Which bird can talk like humans?",
    options: ["Crow", "Parrot", "Duck", "Sparrow"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Parrots can imitate human speech."
  },
  {
    id: 22,
    section: "Birds",
    question: "Which bird is our national bird?",
    options: ["Crow", "Peacock", "Parrot", "Eagle"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "The peacock is India's national bird."
  },
  {
    id: 23,
    section: "Birds",
    question: "Which bird lays eggs?",
    options: ["Hen", "Cat", "Dog", "Cow"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "A hen lays eggs."
  },
  {
    id: 24,
    section: "Birds",
    question: "Which bird is known for its beautiful singing?",
    options: ["Koel", "Ostrich", "Penguin", "Vulture"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "The koel is known for its melodious call."
  },
  {
    id: 25,
    section: "Birds",
    question: "Which bird cannot fly?",
    options: ["Parrot", "Pigeon", "Ostrich", "Crow"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "An ostrich cannot fly."
  },

  // FRUITS AND VEGETABLES
  {
    id: 26,
    section: "Fruits",
    question: "Which fruit is called the king of fruits in India?",
    options: ["Apple", "Mango", "Orange", "Grapes"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Mango is known as the king of fruits."
  },
  {
    id: 27,
    section: "Fruits",
    question: "Which fruit is yellow and curved?",
    options: ["Apple", "Banana", "Watermelon", "Grapes"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "A banana is yellow and curved."
  },
  {
    id: 28,
    section: "Vegetables",
    question: "Which vegetable is orange?",
    options: ["Carrot", "Brinjal", "Cabbage", "Cucumber"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "Carrots are usually orange."
  },
  {
    id: 29,
    section: "Fruits",
    question: "Which fruit has many small seeds on its outside?",
    options: ["Apple", "Strawberry", "Banana", "Mango"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Strawberries have small seeds on their outside."
  },
  {
    id: 30,
    section: "Vegetables",
    question: "Which vegetable makes us cry when we cut it?",
    options: ["Potato", "Onion", "Carrot", "Beans"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Cutting onions releases substances that make our eyes water."
  },

  // GENERAL KNOWLEDGE
  {
    id: 31,
    section: "General Knowledge",
    question: "What is the capital of India?",
    options: ["Mumbai", "Chennai", "New Delhi", "Hyderabad"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "New Delhi is the capital of India."
  },
  {
    id: 32,
    section: "General Knowledge",
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "There are seven days in a week."
  },
  {
    id: 33,
    section: "General Knowledge",
    question: "How many months are there in a year?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "There are twelve months in a year."
  },
  {
    id: 34,
    section: "General Knowledge",
    question: "Which festival is known as the festival of lights?",
    options: ["Holi", "Diwali", "Christmas", "Eid"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Diwali is known as the festival of lights."
  },
  {
    id: 35,
    section: "General Knowledge",
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "A rainbow has seven colors."
  },

  // BODY PARTS
  {
    id: 36,
    section: "Body Parts",
    question: "How many eyes do we have?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "We have two eyes."
  },
  {
    id: 37,
    section: "Body Parts",
    question: "Which body part helps us to smell?",
    options: ["Eyes", "Nose", "Ears", "Hands"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Our nose helps us smell."
  },
  {
    id: 38,
    section: "Body Parts",
    question: "Which body part helps us to hear?",
    options: ["Nose", "Eyes", "Ears", "Legs"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "Our ears help us hear."
  },
  {
    id: 39,
    section: "Body Parts",
    question: "How many legs do we have?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Humans normally have two legs."
  },
  {
    id: 40,
    section: "Body Parts",
    question: "Which body part helps us to taste food?",
    options: ["Tongue", "Nose", "Ear", "Hair"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "Our tongue helps us taste food."
  },

  // UKG MATHS
  {
    id: 41,
    section: "Mathematics",
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "5 + 3 = 8."
  },
  {
    id: 42,
    section: "Mathematics",
    question: "What is 10 - 4?",
    options: ["4", "5", "6", "7"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "10 - 4 = 6."
  },
  {
    id: 43,
    section: "Mathematics",
    question: "Which shape has three sides?",
    options: ["Circle", "Square", "Triangle", "Rectangle"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "A triangle has three sides."
  },
  {
    id: 44,
    section: "Mathematics",
    question: "How many sides does a square have?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "A square has four equal sides."
  },
  {
    id: 45,
    section: "Mathematics",
    question: "What is double of 5?",
    options: ["5", "8", "10", "15"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "Double of 5 is 10."
  },

  // NATURE AND SCIENCE
  {
    id: 46,
    section: "Nature",
    question: "Which star gives us light during the day?",
    options: ["Moon", "Sun", "Mars", "Venus"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "The Sun gives us light and heat."
  },
  {
    id: 47,
    section: "Nature",
    question: "What do plants need to grow?",
    options: ["Water and sunlight", "Plastic", "Toys", "Shoes"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "Plants need water, sunlight, air and nutrients."
  },
  {
    id: 48,
    section: "Nature",
    question: "Which season is usually very hot in India?",
    options: ["Winter", "Summer", "Rainy season", "Spring"],
    answer: 1,
    marks: 1,
    negativeMarks: 0,
    explanation: "Summer is usually the hottest season."
  },
  {
    id: 49,
    section: "Nature",
    question: "What do we use when it rains?",
    options: ["Umbrella", "Sunglasses", "Blanket", "Fan"],
    answer: 0,
    marks: 1,
    negativeMarks: 0,
    explanation: "An umbrella protects us from rain."
  },
  {
    id: 50,
    section: "Nature",
    question: "Which planet do we live on?",
    options: ["Mars", "Jupiter", "Earth", "Saturn"],
    answer: 2,
    marks: 1,
    negativeMarks: 0,
    explanation: "We live on planet Earth."
  }
];

export default questions;
