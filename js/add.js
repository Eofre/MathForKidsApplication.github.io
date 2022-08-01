"use stricts";
const formAnswer = document.querySelector("#form-answer");
const inputAnswer = document.querySelector("#input-answer");
const buttonAnswer = document.querySelector("#btn-answer");
const audio = document.querySelector("#audio");
let answer = 0;
let account = 0;
let record = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;
let minNumber = 0;
let maxNumber = 5;

document.querySelector("#record").innerHTML = +localStorage.getItem("record");
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
  answer = numberOne + numberTwo;
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
    minNumber += 5;
    maxNumber += 5;
    console.log(minNumber, maxNumber);
    equationGenerator(minNumber, maxNumber);
    clearInputValue();
    account++;
    record = +localStorage.getItem("record");
    if (account > record) {
      record = account;
      localStorage.setItem("record", record);
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

// const option1 = document.querySelector("#option1");
// const option2 = document.querySelector("#option2");
// const option3 = document.querySelector("#option3");

// document.querySelector("#record").innerHTML(localStorage.gerItem("record"));

// function recordUpdate() {
//   let result = account > record ? (record = account) : (record = record);
//   return result;
// }

// function generate_equation() {
//   document.querySelector("#record").innerHTML = +localStorage.getItem("record");
//   record = +localStorage.getItem("record");

//   document.querySelector("#incorrectAnswer").innerHTML =
//     +localStorage.getItem("incorrectAnswer");
//   incorrectAnswer = +localStorage.getItem("incorrectAnswer");

//   document.querySelector("#correctAnswer").innerHTML =
//     +localStorage.getItem("correctAnswer");
//   correctAnswer = +localStorage.getItem("correctAnswer");

//   let num1 = Math.floor(Math.random() * 100);
//   let num2 = Math.floor(Math.random() * 100);
//   let dummyAnswer1 = Math.floor(Math.random() * 100);
//   let dummyAnswer2 = Math.floor(Math.random() * 100);
//   let allAnswers = [];
//   let switchAnswers = [];

//   answer = num1 + num2;

//   document.querySelector("#num1").innerHTML = num1;
//   document.querySelector("#num2").innerHTML = num2;

//   allAnswers = [answer, dummyAnswer1, dummyAnswer2];

//   for (let i = allAnswers.length; i--; ) {
//     switchAnswers.push(
//       allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
//     );
//   }

//   option1.innerHTML = switchAnswers[0];
//   option2.innerHTML = switchAnswers[1];
//   option3.innerHTML = switchAnswers[2];
// }

// option1.addEventListener("click", function () {
//   if (option1.innerHTML == answer) {
//     generate_equation();
//     account++;
//     document.querySelector("#account").innerHTML = account;
//     record = account > record ? (record = account) : (record = record);
//     localStorage.setItem("record", record);
//     document.querySelector("#record").innerHTML = record;

//     correctAnswer++;
//     localStorage.setItem("correctAnswer", correctAnswer);
//     document.querySelector("#correctAnswer").innerHTML = correctAnswer;
//   } else {
//     audio.play();
//     account = 0;
//     generate_equation();
//     document.querySelector("#account").innerHTML = account;
//     incorrectAnswer++;
//     localStorage.setItem("incorrectAnswer", incorrectAnswer);
//     document.querySelector("#incorrectAnswer").innerHTML = incorrectAnswer;
//   }
// });

// option2.addEventListener("click", function () {
//   if (option2.innerHTML == answer) {
//     generate_equation();
//     account++;
//     document.querySelector("#account").innerHTML = account;
//     record = account > record ? (record = account) : (record = record);
//     localStorage.setItem("record", record);
//     document.querySelector("#record").innerHTML = record;
//     correctAnswer++;
//     localStorage.setItem("correctAnswer", correctAnswer);
//     document.querySelector("#correctAnswer").innerHTML = correctAnswer;
//   } else {
//     audio.play();
//     account = 0;
//     generate_equation();
//     document.querySelector("#account").innerHTML = account;
//     incorrectAnswer++;
//     localStorage.setItem("incorrectAnswer", incorrectAnswer);
//     document.querySelector("#incorrectAnswer").innerHTML = incorrectAnswer;
//   }
// });

// option3.addEventListener("click", function () {
//   if (option3.innerHTML == answer) {
//     generate_equation();
//     account++;
//     document.querySelector("#account").innerHTML = account;
//     record = account > record ? (record = account) : (record = record);
//     localStorage.setItem("record", record);
//     document.querySelector("#record").innerHTML = record;
//     correctAnswer++;
//     localStorage.setItem("correctAnswer", correctAnswer);
//     document.querySelector("#correctAnswer").innerHTML = correctAnswer;
//   } else {
//     audio.play();
//     account = 0;
//     generate_equation();
//     document.querySelector("#account").innerHTML = account;
//     incorrectAnswer++;
//     localStorage.setItem("incorrectAnswer", incorrectAnswer);
//     document.querySelector("#incorrectAnswer").innerHTML = incorrectAnswer;
//   }
// });

// generate_equation();
// console.log(localStorage.getItem("record"));
