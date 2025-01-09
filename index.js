const scoreHome = document.getElementById("home-score-display");
console.log(scoreHome);

const plusOneBtn = document.getElementById("home-add-pts-btn1");
console.log(plusOneBtn);

let homeScore = 0
plusOneBtn.addEventListener("click", function addOne() {
  scoreHome.textContent = homeScore += 1
})
