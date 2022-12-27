// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const itemElements = createItemEl(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemElements);

function createItemEl(items) {
  return items
    .map(item => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
   <img class="gallery__image" data-source="${item.original}" data-pictureDesc="${item.description}" src="${item.preview}" alt="${item.description}" />
  </a>
</div>`;
    })
    .join('');
}

const Lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
