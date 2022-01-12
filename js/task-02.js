const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.forEach( ingredient => {
const ingredientsItem = ingredient;

const newItemEl = document.createElement('li');
newItemEl.textContent = ingredientsItem;
newItemEl.classList.add('item');

ingredientsList.appendChild(newItemEl);

});















