const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');

let counterValue = 0;

function updateCounterValue() {
    valueEl.textContent = counterValue
};

decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    updateCounterValue();
})

incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    updateCounterValue();
})

console.log(counterValue)