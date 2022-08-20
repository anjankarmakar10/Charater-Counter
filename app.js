const intputText = document.querySelector(".input-box");
const totalCounter = document.querySelector(".total-counter");
const remainingCounter = document.querySelector(".remaining-counter");

intputText.addEventListener("keyup", readText);

function readText() {
  updateCounter();
}

function updateCounter() {
  let max = 50;
  let total = intputText.value.length;
  totalCounter.innerText = total;
  remainingCounter.innerText = max - total;
}
