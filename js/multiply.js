"use stricts";
const formAnswer = document.querySelector("#form-answer");
const inputAnswer = document.querySelector("#input-answer");
const buttonAnswer = document.querySelector("#btn-answer");
const audio = document.querySelector("#audio");
let answer = 0;
let account = 0;
let recordMultiply = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;
let minNumber = 0;
let maxNumber = 3;

document.querySelector("#record").innerHTML =
  +localStorage.getItem("recordMultiply");
// document.querySelector("#correctAnswer").innerHTML =
//   +localStorage.getItem("correctAnswer");
// document.querySelector("#incorrectAnswer").innerHTML =
//   +localStorage.getItem("incorrectAnswer");

function equationGenerator(minNumber, maxNumber) {
  let numberOne = Math.floor(
    Math.random() * (maxNumber - minNumber) + minNumber
  );
  let numberTwo = Math.floor(
    Math.random() * (maxNumber - minNumber) + minNumber
  );
  document.querySelector("#num1").innerHTML = numberOne;
  document.querySelector("#num2").innerHTML = numberTwo;
  answer = numberOne * numberTwo;
}

function clearInputValue() {
  inputAnswer.value = "";
}

equationGenerator(minNumber, maxNumber);

// let resultEquation = equationGenerator();
formAnswer.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputAnswer.value == answer) {
    console.log("красава");
    minNumber += 2;
    maxNumber += 2;
    console.log(minNumber, maxNumber);
    equationGenerator(minNumber, maxNumber);
    clearInputValue();
    account++;
    record = +localStorage.getItem("recordMultiply");
    if (account > record) {
      record = account;
      localStorage.setItem("recordMultiply", record);
      document.querySelector("#record").innerHTML = record;
    }
    document.querySelector("#account").innerHTML = account;
  } else {
    minNumber = 0;
    maxNumber = 5;
    audio.play();
    console.log("лох");
    equationGenerator(minNumber, maxNumber);
    clearInputValue();
    account = 0;
    document.querySelector("#account").innerHTML = account;
    // incorrectAnswer++;
    // localStorage.setItem("incorrectAnswer", incorrectAnswer);
    // document.querySelector("#incorrectAnswer").innerHTML =
    //   +localStorage.getItem("incorrectAnswer");
  }
});
