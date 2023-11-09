
let randomNumber = Math.floor(Math.random() *100 )+1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guess_submit");
const guessField = document.querySelector(".guess_field");

let guessCount = 1;
let resetButton;

