const categories = document.querySelectorAll('.item');
const numberOfCategories = categories.length;

console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach((category) => {
	console.log(`Category: ${category.firstElementChild.textContent}`);
	console.log(`Elements: ${category.querySelectorAll('li').length}`);
})
	