function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

//1. Створи функцію createBoxes(amount), яка приймає один параметр - число. 
//Функція створює стільки <div>, скільки вказано в amount і 
//додає їх у div#boxes.

//   1. Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути 
// ширшим і вищим від попереднього на 10px.
//   2. Всі елементи повинні мати випадковий колір фону у форматі HEX.
//   3. Використовуй готову функцію getRandomHexColor для отримання кольору.

//2. Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

const controls = document.querySelector('controls');
const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
  inputEl.value = '';
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputEl.value = '';
  boxesEl.innerHTML = '';
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  boxesEl.insertAdjacentHTML('beforeend', boxesArr.join(''));
}