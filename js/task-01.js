// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// const categoriesList = document.querySelector("ul#categories");
// const categoriesItems = categoriesList.children;

// console.log("Number of categories:", categoriesItems.length);

// for (let i = 0; i < categoriesItems.length; i += 1) {
//   console.log("Category:", categoriesItems[i].firstElementChild.textContent);
//   console.log("Elements:", categoriesItems[i].lastElementChild.children.length);
// }   
 
const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories:${categoriesList.length}`);
const categoriesUl = document.querySelectorAll("#categories>li");
categoriesUl.forEach((el) => {
  const category = `Category: ${el.firstElementChild.textContent}`;
  const elements = `Elements: ${el.lastElementChild.children.length}`;
  console.log(category);
  console.log(elements);
});


