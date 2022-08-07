// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const range = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

range.addEventListener("input", () => {
  
     textChange.style.fontSize = range.value + 'px'  

});
  

