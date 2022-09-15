const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient =>{
  const liEl = document.createElement('li');
  liEl.classList.add("item");
  liEl.textContent = `${ingredient}`;
  return liEl;
}
)

listIngredients.append(...elements);
console.log(elements);
