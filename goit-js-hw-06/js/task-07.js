const textSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

function updateTextSize() {
    const newSize = textSizeControl.value + "px"
    text.style.fontSize = newSize
}

textSizeControl.addEventListener("input", updateTextSize)

console.log(updateTextSize)