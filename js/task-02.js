const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsItem = ingredients[i]


const newItemEl = document.createElement('li');
newItemEl.textContent = ingredientsItem;
newItemEl.classList.add('item');

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.appendChild(newItemEl)};






