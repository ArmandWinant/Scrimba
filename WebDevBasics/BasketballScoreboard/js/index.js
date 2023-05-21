function initializeScores() {
  let scores = document.getElementsByClassName("score");
  
  for (const score of scores) {
    score.textContent = 0;
  }

  highlightLeader()
}

function increaseScore(element) {
  let points = parseInt(element.textContent);
  let scoreEl = element.parentElement.previousElementSibling;

  scoreEl.textContent = parseInt(scoreEl.textContent) + points;

  highlightLeader();
}

function highlightLeader() {
  let scores = document.getElementsByClassName("score");

  let x = parseInt(scores[0].textContent);
  let y = parseInt(scores[1].textContent);

  if (x > y) {
    scores[0].style.background = "#9AABD855";
    scores[1].style.background = "#FFFFFF";
  } else if (y > x) {
    scores[0].style.background = "#FFFFFF";
    scores[1].style.background = "#9AABD855";
  } else {
    scores[0].style.background = "#FFFFFF";
    scores[1].style.background = "#FFFFFF";
  }
}

initializeScores()