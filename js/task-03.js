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

const imagesEl = images.map(image => {
  //list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
  const liEl = document.createElement('li');
  liEl.insertAdjacentHTML("afterbegin","<img class='image'></img>");
  const imageEl = liEl.querySelector('.image');
  imageEl.src = image.url;
  imageEl.alt = image.alt; 
  imageEl.style.height = "200px";
  liEl.style.listStyleType = 'none';
  liEl.append(imageEl);
  galleryEl.append(liEl);
 })

galleryEl.style.display = 'flex';
galleryEl.style.gap = '20px';
