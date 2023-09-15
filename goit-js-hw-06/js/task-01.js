const categoriesList = document.querySelector('ul#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach((categoriesItem) => {
  const categoriesTitle = categoriesItem.querySelector('h2').textContent;
    console.log(`Category: ${categoriesTitle}`);
    const categoriesLiItem = categoriesItem.querySelectorAll('li');
    console.log(`Elements: ${categoriesLiItem.length}`)
})
