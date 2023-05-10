import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//se toman las imagenes y se importan

const gallery = document.querySelector('.gallery');

// se crea la funcion para crear la galeria y los elementos

function createGallery(items) {
  return items
    .map(
      (item) =>
        `<li class = "gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img class= "gallery__image"
  src="${item.preview}";
  data-source="${item.original}"
  alt="${item.description}"
  /></a>
  </li>`
    )
    .join('');
  //se usa join para que todas las imagenes esten dentro de una misma matriz
}

//se crea la constante para añadir la galeria dentro de html usando el innerHTML

const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;
gallery.addEventListener('çlick', clickOnImage);

//se define la funcion clickOnImage para que abra la dentro de un modal

function clickOnImage(imageAction) {
  action(imageAction);
  if (imageAction.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightBox.create(
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
