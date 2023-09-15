const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', function () {
    if (inputName.value==="") {
        outputName.textContent = "Anonymous"
    } else {
        outputName.textContent = inputName.value
    }
})

console.log(inputName)