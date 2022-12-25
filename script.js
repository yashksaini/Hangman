const alphabets = document.querySelector("#alphabets");
const guess = document.querySelector("#guess");
const selectType = document.querySelector("#selectType");
const hangman = document.querySelector("#hangman");
const fruits = [
  "BANANA",
  "APPLE",
  "MANGO",
  "APRICOT",
  "BLUEBERRY",
  "GRAPES",
  "JACKFRUIT",
  "PAPAYA",
  "WATERMELON",
  "DURIAN",
];
const animals = [
  "HORSE",
  "PANTHER",
  "ELEPHENT",
  "JACKAL",
  "MONKEY",
  "ZEBRA",
  "RHINOCEROS",
  "KANGAROO",
  "IGUANA",
  "PEACOCK",
];
const countries = [
  "INDIA",
  "AUSTRALIA",
  "ENGLAND",
  "BANGLADESH",
  "NEWZEALAND",
  "ARGENTINA",
  "SOUTHAFRICA",
  "CANADA",
  "PORTUGAL",
  "RUSSIA",
];
let word = "";
let guessedWord = Array(20).fill("_");
let hangCount = 1;
let matchCount = 0;
const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
const displayAlphabets = () => {
  alphabets.style.pointerEvents = "none";
  alphabets.innerHTML = "";
  // For creating A to Z buttons
  for (let i = 65; i <= 90; i++) {
    alphabets.innerHTML += `<button id="alpha${i}" onclick="checkAlphabet(${i})">${String.fromCharCode(
      i
    )}</button>`;
  }
};

const selectCatg = (value) => {
  if (value === 1) {
    shuffle(fruits);
    word = fruits[0];
  } else if (value === 2) {
    shuffle(animals);
    word = animals[0];
  } else {
    shuffle(countries);
    word = countries[0];
  }
  selectType.style.pointerEvents = "none";
  let x = "cat" + value;
  document.getElementById(x).className = "active";
  displayGuessWord();
  alphabets.style.pointerEvents = "auto";
};

const displayGuessWord = () => {
  guess.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    guess.innerHTML += ` ${guessedWord[i]}`;
  }
};

const checkAlphabet = (value) => {
  let match = 0;
  let x = "alpha" + value;
  document.getElementById(x).className = "disable";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === String.fromCharCode(value)) {
      guessedWord[i] = word[i];
      match++;
      matchCount++;
    }
  }
  if (match === 0) {
    hangCount++;
    hangman.src = `images/${hangCount}.png`;
    if (hangCount === 7) {
      alphabets.style.pointerEvents = "none";
    }
  }
  if (matchCount === word.length) {
    hangman.src = `images/8.png`;
  }
  displayGuessWord();
};
displayAlphabets();
