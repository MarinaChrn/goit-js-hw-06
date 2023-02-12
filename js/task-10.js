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

const collectionEl = document.querySelector('div#boxes');

const createBoxes = (amount) => {
  for (let i=0;i<amount;i+=1) {
    const divEl = document.createElement('div');
    const boxSize = (i*10+30);
    divEl.style.width = boxSize+"px";
    divEl.style.height = boxSize+"px";
    const color = getRandomHexColor();
    divEl.style.backgroundColor = color;
    collectionEl.append(divEl);
    
  }
  return collectionEl;
}

const destroyBoxes = () => {
  const allDivEl = collectionEl.querySelectorAll('div')
  for (let i=0;i<allDivEl.length; i+=1) {
    const deleteEL = allDivEl[i];
    deleteEL.remove();
  }
}

const inputEl = document.querySelector('input[type="number"]')
inputEl.addEventListener('blur', (event)=> {
  const amount = event.currentTarget.value;
  btnCreateEl.addEventListener('click', createBoxes(amount));
})

const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
btnDestroyEl.addEventListener('click', destroyBoxes());