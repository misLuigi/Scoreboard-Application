const scoreHome = document.getElementById("home-score-display");
console.log(scoreHome);

const homePlusOneBtn = document.getElementById("home-add-pts-btn1");
console.log(homePlusOneBtn);

const homePlusTwoBtn = document.getElementById("home-add-pts-btn2");
console.log(homePlusTwoBtn);

const homePlusThreeBtn = document.getElementById("home-add-pts-btn3");
console.log(homePlusThreeBtn);

//home score function area
let homeScore = 0

homePlusOneBtn.addEventListener("click", function homeAddOne() {
  scoreHome.textContent = homeScore += 1;
})

homePlusTwoBtn.addEventListener("click", function homeAddTwo() {
  scoreHome.textContent = homeScore += 2;
})

homePlusThreeBtn.addEventListener("click", function homeAddThree() {
  scoreHome.textContent = homeScore += 3;
})

//guest area

const scoreGuest = document.getElementById("guest-score-display");
console.log(scoreGuest);

const guestPlusOneBtn = document.getElementById("guest-add-pts-btn1");
console.log(guestPlusOneBtn);

const guestPlusTwoBtn = document.getElementById("guest-add-pts-btn2");
console.log(guestPlusTwoBtn);

const guestPlusThreeBtn = document.getElementById("guest-add-pts-btn3");
console.log(guestPlusThreeBtn);

//guest score funciton area

let guestScore = 0

guestPlusOneBtn.addEventListener("click", function guestAddOne() {
  scoreGuest.textContent = guestScore += 1;
})

guestPlusTwoBtn.addEventListener("click", function guestAddTwo() {
  scoreGuest.textContent = guestScore += 2;
})

guestPlusThreeBtn.addEventListener("click", function guestAddThree() {
  scoreGuest.textContent = guestScore += 3;
})

// New game button

const newGame = document.getElementById("newGameBtn");
console.log(newGame);

newGame.addEventListener("click", function newGameZero() {
  homeScore = 0;
  guestScore = 0;
  scoreHome.textContent = homeScore;
  scoreGuest.textContent = guestScore;
})

const timerEl = document.getElementById("timer");
console.log(timerEl);

const startTimer = 10;
let timer = startTimer * 60;

function countDown() {
  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  timerEl.innerHTML = `${minutes}:${seconds}`;
  timer--;
}

setInterval(countDown, 1000);

if (timer < 0) {
  timerEl.textContent = "Time is up!"
}