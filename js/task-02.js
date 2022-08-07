// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContent = document.querySelector("ul");
console.log(ingredientsContent);

const makeIngredientsEl = ingredient => {

  const ingredientsList = document.createElement("li");
  ingredientsList.classList.add("item");
      ingredientsList.textContent = ingredient;
  
  return ingredientsList;
 
}

const element = ingredients.map(makeIngredientsEl);
console.log(element);
ingredientsContent.append(...element);

