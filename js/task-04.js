// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const buttonSub = document.querySelector("[data-action='increment']");
const buttonAdd = document.querySelector("[data-action='decrement']");
     

let counterValue = 0;
let startValue

const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
   
  startValue = counterValue ? (counterValue -= 1) : 0;

  document.getElementById("value").textContent = counterValue;
};
buttonSub.addEventListener("click", increment);
buttonAdd.addEventListener("click", decrement);
