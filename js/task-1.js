const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const titleNumberCategory = document.querySelectorAll('.item');

titleNumberCategory.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
