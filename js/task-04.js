//1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//та ініціалізуй її значенням 0.
//2. Додай слухачів кліків до кнопок, всередині яких 
//збільшуй або зменшуй значення лічильника.
//3. Оновлюй інтерфейс новим значенням змінної counterValue.

const spanEl = document.querySelector('span#value');
let counterValue = spanEl.textContent;
const btnMinusEl = document.querySelector('button[data-action=decrement]');
const btnAddEl = document.querySelector('button[data-action=increment]');

btnMinusEl.addEventListener('click', (event)=> {
    event.preventDefault();
    counterValue = counterValue - 1;
    spanEl.textContent = counterValue;
})

btnAddEl.addEventListener('click', (event)=> {
    event.preventDefault();
    counterValue = counterValue + 1;
    spanEl.textContent = counterValue;
})