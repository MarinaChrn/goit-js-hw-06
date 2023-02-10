//1 Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//2 Для кожного элемента li.item у списку ul#categories, 
//знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
//і кількість елементів в категорії (усіх <li>, вкладених в нього).

const countCategories = () => {
    const listOfCategoriesEl = document.querySelector('#categories');
    const categoryEl = listOfCategoriesEl.querySelectorAll('.item');
    console.log(`Number of categories: ${categoryEl.length}`);
    categoryEl.forEach(category => {
        const categoryName = category.querySelector('h2');
        console.log(`Category:${categoryName.textContent}`);
        const amountOfEl = category.querySelectorAll('li');
        console.log(`Elements: ${amountOfEl.length}`);
    })
}

console.log(countCategories());