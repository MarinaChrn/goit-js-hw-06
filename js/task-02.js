const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//1. Створить окремий елемент <li>. 
//Обов'язково використовуй метод document.createElement().
//2. Додасть назву інгредієнта як його текстовий вміст.
//3. Додасть елементу клас item.
//4. Після чого, вставить усі 
//<li> за одну операцію у список ul#ingredients.

const ingredientsEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.className = "item";
  return liEl;
})

const listIngredientsEl = document.querySelector('ul#ingredients');
listIngredientsEl.append(...ingredientsEl);