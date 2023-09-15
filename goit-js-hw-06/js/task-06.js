document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById('validation-input')

    inputField.addEventListener("blur", function () {
        const inputValue = this.value;
        const expectedLength = parseInt(this.getAttribute("data-length"))

        if (inputValue.length === expectedLength) {
            this.classList.remove("invalid")
            this.classList.add("valid")
        } else {
            this.classList.remove("valid")
            this.classList.add("invalid")
        }
    })
  console.log(inputField)  
})

