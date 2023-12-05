// const button = document.querySelector("button");

// button.addEventListener("click", updateName);

// function updateName() {
//   const name = prompt("Enter a new name");
//   button.textContent = `Player 1: ${name}`;
// }

// function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }
  
//   function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }
  
//   const buttons = document.querySelectorAll("button");
  
//   for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
//   }
//   let randomNumber = Math.floor(Math.random() * 100) + 1;

//   const guesses = document.querySelector(".guesses");
//   const lastResult = document.querySelector(".lastResult");
//   const lowOrHi = document.querySelector(".lowOrHi");
  
//   const guessSubmit = document.querySelector(".guessSubmit");
//   const guessField = document.querySelector(".guessField");
  
//   let guessCount = 1;
//   let resetButton;
//   function checkGuess() {
//     alert("I am a placeholder");
//   }
  
//   function checkGuess() {
//     const userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//       guesses.textContent = "Previous guesses:";
//     }
//     guesses.textContent = `${guesses.textContent} ${userGuess}`;
  
//     if (userGuess === randomNumber) {
//       lastResult.textContent = "Congratulations! You got it right!";
//       lastResult.style.backgroundColor = "green";
//       lowOrHi.textContent = "";
//       setGameOver();
//     } else if (guessCount === 10) {
//       lastResult.textContent = "!!!GAME OVER!!!";
//       lowOrHi.textContent = "";
//       setGameOver();
//     } else {
//       lastResult.textContent = "Wrong!";
//       lastResult.style.backgroundColor = "red";
//       if (userGuess < randomNumber) {
//         lowOrHi.textContent = "Last guess was too low!";
//       } else if (userGuess > randomNumber) {
//         lowOrHi.textContent = "Last guess was too high!";
//       }
//     }
  
//     guessCount++;
//     guessField.value = "";
//     guessField.focus();
//   }
  let el = document.getElementById("clock");
console.log(el.ariaAtomic); // true
el.ariaAtomic = "false";
console.log(el.ariaAtomic); // false


const output = document.querySelector("#output");
const parent = document.querySelector("#parent");
parent.addEventListener("click", (event) => {
  const currentTarget = event.currentTarget.getAttribute("id");
  const target = event.target.getAttribute("id");
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
