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

//se crea la constante para añadir la galeria dentro de html usando el innerHTML

const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;
gallery.addEventListener('click', clickOnImage);

//se define la funcion clickOnImage para que abra la dentro de un modal

function clickOnImage(imageAction) {
  action(imageAction);
  if (imageAction.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${imageAction.target.dataset.source}" width = "800" height="600">`
  );
  instance.show();
  // se agrega un even listener para pulsar la tecla escapese cierre la imagen
  gallery.addEventListener('keydown', (imageAction) => {
    if (imageAction.code === 'Escape') {
      instance.close();
    }
  });
}
