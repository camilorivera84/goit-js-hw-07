import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//se toman las imagenes y se importan

const containerGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    (element) => `<li class= "gallery__item">
<a class = "gallery__link" href = "${element.original}">
<img class= "gallery__image"
src = "${element.preview}"
data-source = "${element.original}"
alt = "${element.description}"
/>
</a>
</li>`
  )
  .join('');

containerGallery.insertAdjacentHTML('afterbegin', galleryMarkup);
containerGallery.addEventListener('click', (event) => event.preventDefault());
