// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const colorValue = document.querySelector('span.color');

buttonChangeColor.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = color;
});



