// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   changeColorBtn: document.querySelector(".change-color"),
//   color: document.querySelector(".color"),
//   body: document.querySelector("body"),
// };

// refs.changeColorBtn.addEventListener("click", changecolorBtnlick);

// function changeColorBtnlick() {
// const currentColor = getRandomHexColor();
// refs.color.textContent = currentColor;
// refs.body.style.backgroundColor = currentColor;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});