const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingList = document.querySelector('ul#ingredients');

ingredients.forEach((ingredient) => {
  const li = document.createElement('li')
  li.textContent = ingredient
  li.classList.add('item')
  ingList.appendChild(li)
})