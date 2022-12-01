const header = document.querySelector(".header");

const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

const totalScore1 = document.getElementById("total-score-1");
const totalScore2 = document.getElementById("total-score-2");

const currentScore1 = document.getElementById("current-score-1");
const currentScore2 = document.getElementById("current-score-2");

const btnStartgame = document.querySelector(".btn-newgame");
const btnRoll = document.querySelector(".btn-roll");
const btnSave = document.querySelector(".btn-save");
const dice = document.querySelector(".dice");

const finishScore = 100;

let currentScore, totalScore, activeplayer, active;

const newGame = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  active = true;
  player1.classList.remove("player-active");
  player2.classList.remove("player-active");
  player1.classList.add("player-active");
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  header.textContent = `Гравець ${activeplayer + 1} кидай кубик!`;
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current-score-${activeplayer + 1}`).textContent =
    currentScore;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
  activeplayer = activeplayer === 0 ? 1 : 0;
  header.textContent = `Гравець ${activeplayer + 1} кидай кубик!`;
};

const startGame = function () {
  if (active) {
    let randomNum = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove("hidden");
    dice.src = `img/dice${randomNum}.png`;
    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current-score-${activeplayer + 1}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  } else {
    header.textContent = "Почни нову гру прям зараз!";
    dice.classList.add("hidden");
  }
};

const saveScore = function () {
  if (active) {
    totalScore[activeplayer] += currentScore;
    totalScore1.textContent = totalScore[0];
    totalScore2.textContent = totalScore[1];
    if (totalScore[activeplayer] >= finishScore) {
      header.textContent = `Гравець ${activeplayer + 1} виграв!`;
      active = false;
      dice.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
};

btnStartgame.addEventListener("click", newGame);
btnRoll.addEventListener("click", startGame);
btnSave.addEventListener("click", saveScore);
