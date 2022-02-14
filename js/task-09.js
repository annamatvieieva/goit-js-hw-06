function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector('.change-color');
const bodyOfDocument = document.querySelector('body');
const color = document.querySelector('.color');


buttonChange.addEventListener('click', (event) => {
  const colorRandom = getRandomHexColor();
  bodyOfDocument.style.backgroundColor = colorRandom;
  color.textContent = colorRandom;
})

