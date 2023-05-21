function initializeScores() {
  let scores = document.getElementsByClassName("score");
  
  for (const score of scores) {
    score.textContent = 0;
  }
}

// function addOne(element) {
//   let scoreEl = element.parentElement.previousElementSibling;
//   scoreEl.textContent = parseInt(scoreEl.textContent) + 1;

// }

// function addTwo(element) {
//   let scoreEl = element.parentElement.previousElementSibling;
//   scoreEl.textContent = parseInt(scoreEl.textContent) + 1;
// }

// function addThree(element) {
//   console.log(element)
// }


function increaseScore(element, points) {
  let scoreEl = element.parentElement.previousElementSibling;
  scoreEl.textContent = parseInt(scoreEl.textContent) + points;
}

initializeScores()