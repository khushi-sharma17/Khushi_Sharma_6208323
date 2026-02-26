let count = 0;

// Select elements
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Update UI function
function updateCounter() {
    counterDisplay.innerText = count;
}

// Increment
incrementBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

// Decrement
decrementBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

// Reset
resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});
