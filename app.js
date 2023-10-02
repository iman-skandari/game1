const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoine);
}

function tossCoine(e) {
  let playerGuess = e.target.innerText;
  //   console.log("player"+e.target.innerText);تا قبل نکته8
  let computerToss = Math.floor(Math.random() * 2);
  let comouterGuess=coinArray[computerToss]
  //   console.log(computerToss);
  //   console.log("comouter"+coinArray[computerToss]); تا قبل نکته8
  message.innerHTML="computer selected"+comouterGuess;
  let outPut;
  if (playerGuess===comouterGuess) {
    outPut=" player win."
    score[0]++;
  }else{
    outPut=" computer win."
    score[1]++;
  }
  message.innerHTML+=outPut+"<br/> player:"+score[0]+"computer:"+score[1]
}
