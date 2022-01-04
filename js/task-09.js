function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector ('.change-color');
const nameColor = document.querySelector ('.color')

btnEl.addEventListener('click', onChangeBtnColor)


function onChangeBtnColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();


}