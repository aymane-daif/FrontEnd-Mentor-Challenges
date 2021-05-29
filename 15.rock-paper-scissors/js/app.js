const main = document.getElementById("main");
const currentScore = document.getElementById("current_score");
const choices = document.getElementById("choices");
const footer = document.getElementById("footer");
const rules = document.getElementById("rules");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close");
let score = +currentScore.textContent;

const hands = ["paper", "scissors", "rock"];

/* CHOOSE HANDS */
choices.addEventListener("click", (e) => {
  if (e.target.id === "paper" || e.target.getAttribute("alt") === "paper") {
    pickHand("paper");
  } else if (
    e.target.id === "scissors" ||
    e.target.getAttribute("alt") === "scissors"
  ) {
    pickHand("scissors");
  } else if (
    e.target.id === "rock" ||
    e.target.getAttribute("alt") === "rock"
  ) {
    pickHand("rock");
  }
});

/* MODAL */
rules.addEventListener("click", () => {
  modal.style.display = "flex";
  overlay.style.display = "block";
  console.log("show");
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
main.addEventListener("click", (e) => {
  if (e.target === main) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
});

/* CHOOSE COMPUTER HAND & CHOOSE WINEER & PRINT RESULT & UPDATE SCORE & UPDATE UI*/
function pickHand(id_hand) {
  /* CHOOSE COMPUTER HAND */
  let id_house = houseHand();
  /*  CHOOSE WINEER */
  let winner = chooseWinner(id_hand, id_house);
  let result;

  choices.classList.add("choosen");
  footer.style.margin = "3rem";
  /* UPDATE SCORE */
  if (winner === "draw") {
    result = "IT'S A DRAW";
  } else if (winner === "win") {
    result = "YOU WON";
    score++;
  } else {
    result = "YOU LOST";
    score--;
  }

  let html = `
    <div class="box-1">
        <h1>YOU PICKED</h1>
        <div class="choice ${id_hand} picked" id=${id_hand}>
            <img src="./images/icon-${id_hand}.svg" alt="${id_hand}" />
        </div>
    </div>

    <div class="box-2 results">
        <h2>${result}</h2>
        <button id="replay"> PLAY AGAIN </button>
    </div>

    <div class="box-3">
        <h1>THE HOUSE PICKED</h1>
        <div class="choice ${id_house} picked" id=${id_house}>
            <img src="./images/icon-${id_house}.svg" alt="${id_house}" />
        </div>
    </div>
    `;
  /* UPDATE UI */
  choices.innerHTML = html;
  currentScore.textContent = score;
  updateUI();
}

/* Generate computer hand*/
function houseHand() {
  let rnd = Math.floor(Math.random() * 3);
  return hands[rnd];
}
/* Apply rules to get the winner */
function chooseWinner(user, computer) {
  if (user === computer) {
    return "draw";
  } else if (
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper") ||
    (user === "rock" && computer === "scissors")
  ) {
    return "win";
  } else {
    return "loose";
  }
}
/* update UI */
function updateUI() {
  let html = `
  <img src="./images/bg-triangle.svg" alt="triangle" class="triangle" />
    <div class="choice paper" id="paper">
      <img src="./images/icon-paper.svg" alt="paper" />
    </div>
    <div class="choice scissors" id="scissors">
      <img src="./images/icon-scissors.svg" alt="scissors" />
    </div>
    <div class="choice rock" id="rock">
      <img src="./images/icon-rock.svg" alt="rock" />
    </div>
  `;
  const replayBtn = document.getElementById("replay");
  replayBtn.addEventListener("click", () => {
    choices.innerHTML = html;
    choices.classList.remove("choosen");
    footer.style.margin = "margin: 10rem 3rem";
  });
}
