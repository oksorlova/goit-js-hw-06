const inputEl = document.querySelector ('#validation-input');

const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener ('blur', onChekSymbols)

function onChekSymbols (event) {
    if (event.currentTarget.value.length !== inputLength) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
      } else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
      }
    
}