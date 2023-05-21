function initializeScores() {
  let scores = document.getElementsByClassName("score");
  
  for (const score of scores) {
    score.textContent = 0;
  }
}

function increaseScore(element) {
  let points = parseInt(element.textContent);
  let scoreEl = element.parentElement.previousElementSibling;
  
  scoreEl.textContent = parseInt(scoreEl.textContent) + points;
}

initializeScores()