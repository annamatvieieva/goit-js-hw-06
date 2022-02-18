const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newListItems = ingredients.map((ingredient) => {
 const newItem = document.createElement('li');
     newItem.textContent = ingredient;
  newItem.classList.add('item');
  return newItem;
})

list.append(...newListItems);


