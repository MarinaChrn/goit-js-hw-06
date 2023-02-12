function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.


//console.log(color);
const btnEl = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('span.color');

btnEl.addEventListener('click', (event)=>{
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = `${color}`;
})