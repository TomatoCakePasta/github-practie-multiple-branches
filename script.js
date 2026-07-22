let count = 0;

const countElement = document.getElementById("count");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");

// カウントを画面に反映
function updateCount() {
    countElement.textContent = count;
}

// 減らす
decreaseButton.addEventListener("click", () => {
    count--;
    updateCount();
});