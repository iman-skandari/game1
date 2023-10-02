const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoine);
}

function tossCoine(e) {
  console.log(e.target.innerText);
  let computerToss = Math.floor(Math.random() * 2);
  console.log(coinArray[computerToss]);
  let playerGuess = e.target.innerText;
  let comouterGuess = coinArray[computerToss];
  message.innerHTML = " computer selected" + comouterGuess;
  let outPut;
  if (playerGuess === comouterGuess) {
    outPut = " player win";
    score[0]++;
  } else {
    outPut = " computer win";
    score[1]++;
  }
  message.innerHTML +=
    outPut + "<br/> player:" + score[0] + " computer:" + score[1];
}
