const numbers = document.querySelectorAll(".number");
const answerZone = document.querySelector(".answer-zone");

numbers.forEach((number) => {
  number.addEventListener("dragstart", () => {
    number.classList.add("dragging");
  });

  number.addEventListener("dragend", () => {
    number.classList.remove("dragging");
  });
});

answerZone.addEventListener("dragover", (event) => {
  event.preventDefault();
});

answerZone.addEventListener("drop", (event) => {
  const draggedNumber = document.querySelector(".dragging");
  answerZone.appendChild(draggedNumber);
});

function checkAnswer() {
  const sortedNumbers = Array.from(answerZone.children).map((child) =>
    parseInt(child.innerText)
  );
  const originalNumbers = [-1, -3, -5, -7]; // Original sorted numbers
  if (JSON.stringify(sortedNumbers) === JSON.stringify(originalNumbers)) {
    alert("Correct!");
  } else {
    alert("Incorrect. Try again!");
  }
}

function resetQuiz() {
  const allNumbers = document.querySelectorAll(".number");
  const originalNumbersContainer = document.querySelector(".numbers");
  const answerZone = document.querySelector(".answer-zone");

  // Clear the answer zone
  answerZone.innerHTML = "";

  // Reset the numbers to original position
  allNumbers.forEach((number) => {
    originalNumbersContainer.appendChild(number);
  });
}
