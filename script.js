let balls = " ";
let timedur = 60;
let hitrandnum;
let score = 0;

function createbubbles() {
  balls = "";
  for (let i = 1; i <= 160; i++) {
    let randnum = Math.trunc(Math.random() * 10 + 1);
    balls += `<div class="dot">${randnum}</div>`;
  }
  document.querySelector(".circles").innerHTML = balls;
}

function timer() {
  const timestore = setInterval(function () {
    if (timedur > 0) {
      timedur--;
      document.querySelector("#timer").textContent = timedur;
    } else {
      clearInterval(timestore);
      document.querySelector(".circles").innerHTML = `<h1>Game Over</h1> 
      
      <p>Your Score is:${score} </p>`;
    }
  }, 1000);
}

function randomhitval() {
  hitrandnum = Math.trunc(Math.random() * 10 + 1);
  document.querySelector("#hitval").textContent = hitrandnum;
}

function UpdateScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".circles").addEventListener("click", function (e) {
  const targetval = parseInt(e.target.textContent);
  if (targetval === hitrandnum) {
    createbubbles();
    randomhitval();
    UpdateScore();
  } else {
    clearInterval(timedur);
  }
});

// Initial setup
createbubbles();
randomhitval();
timer();
