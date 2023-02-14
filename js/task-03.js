const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Використовуй масив об'єктів images для створення елементів <img>, 
//вкладених в <li>. Для створення розмітки використовуй шаблонні рядки 
//і метод insertAdjacentHTML().

//1. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//2. Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const galleryEl = document.querySelector('.gallery');

const imagesEl = images.map((image) => {
  return `<img class='image' src='${image.url}' url='${image.alt}' height='200px'></img>`;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', imagesEl)
galleryEl.style.display = 'flex';
galleryEl.style.gap = '20px';
